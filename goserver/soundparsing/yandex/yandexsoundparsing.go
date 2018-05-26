package yandex

import (
	"bytes"
	"encoding/json"
	"encoding/xml"
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"

	"homecontrol/goserver/services/soundparsing"
)

// Settings settings for yandex sound parsing
type Settings struct {
	Key   string `json:"key"`
	Lang  string `json:"lang"`
	Topic string `json:"topic"`
	UUID  string `json:"uuid"`
}

// RecognitionResults Reply with Yandex, format: xml
type RecognitionResults struct {
	XMLName xml.Name `xml:"recognitionResults"`
	Variant []string `xml:"variant"`
}

const (
	nameID = "yandex"
)

var (
	defaultSettings = &Settings{
		Key:   "",
		Lang:  "ru-RU",
		Topic: "queries",
		UUID:  "12ae13cb744628b58fb536d496daa2e6",
	}
)

// SoundParsing struct yandex sound parsing
type SoundParsing struct {
	nameID   string
	Settings *Settings
}

func init() {
	soundParsing := NewSoundParsing()
	soundparsing.RegisterSoundParsing(nameID, soundParsing)
	soundparsing.SetSettingsServer(nameID, soundParsing.Settings)
}

// NewSoundParsing create new yandex sound parsing
func NewSoundParsing() *SoundParsing {
	raw, err := json.Marshal(soundparsing.GetSettingsServer(nameID))
	if err != nil {
		fmt.Println(errors.New("yandex SoundParsing: NewSoundParsing(), " + err.Error()))
	}

	setting := defaultSettings
	err = json.Unmarshal(raw, setting)
	if err != nil {
		fmt.Println(errors.New("yandex SoundParsing: NewSoundParsing(), " + err.Error()))
	}

	return &SoundParsing{
		nameID:   nameID,
		Settings: setting,
	}
}

// GetNameID return nameID = Key interface
func (sp *SoundParsing) GetNameID() (nameID string) {
	return sp.nameID
}

// GetIDCommandANDControlledBySound get ID controlled and command
func (sp *SoundParsing) GetIDCommandANDControlledBySound(sound []byte) (controlledID int, commandID string, err error) {
	if len(sound) < 44 {
		err = errors.New("yandex SoundParsing: Not sound, size sound - " + strconv.Itoa(len(sound)) + " byte")
		return
	}
	if sp.Settings.Key == "" {
		err = errors.New("yandex SoundParsing: No KEY")
		return
	}
	if sp.Settings.Lang == "" {
		err = errors.New("yandex SoundParsing: No lang settings")
		return
	}
	if sp.Settings.Topic == "" {
		err = errors.New("yandex SoundParsing: No queries settings")
		return
	}
	if sp.Settings.UUID == "" {
		err = errors.New("yandex SoundParsing: No UUID settings")
		return
	}

	var recognitionResults RecognitionResults
	buffer := bytes.NewBuffer(sound)
	URL := "https://asr.yandex.net/asr_xml?uuid=" + sp.Settings.UUID + "&key=" + sp.Settings.Key + "&topic=" + sp.Settings.Topic + "&lang=" + sp.Settings.Lang
	req, err := http.NewRequest("POST", URL, buffer)
	if err != nil {
		err = errors.New("yandex SoundParsing: " + err.Error())
		return
	}
	req.Header.Add("Content-type", "audio/x-wav")
	client := new(http.Client)
	resp, err := client.Do(req)
	if err != nil {
		err = errors.New("yandex SoundParsing: " + err.Error())
		return
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		err = errors.New("yandex SoundParsing: " + err.Error())
		return
	} else {
		xml.Unmarshal(body, &recognitionResults)
	}

	for _, variant := range recognitionResults.Variant {
		variant = strings.Replace(variant, ",", "", -1)
		variant = strings.Replace(variant, ".", "", -1)
		variants := strings.Split(variant, " ")
		if len(variants) < 2 {
			continue
		} else {
			controlledID, commandID, err = soundparsing.CompareCommand(variants)
			if err != nil {
				continue
			}
			break
		}
	}

	if controlledID == 0 && commandID == "" {
		err = errors.New("yandex " + soundparsing.ErrNotFoundIDCommandAndIDControlled.Error())
		return
	}
	if controlledID == 0 {
		err = errors.New("yandex " + soundparsing.ErrNotFoundIDControlled.Error())
		return
	}
	if commandID == "" {
		err = errors.New("yandex " + soundparsing.ErrNotFoundIDCommand.Error())
		return
	}

	return
}

// GetParamHTMLForInsertingSettings return param field for HTML for inserting settings from the client to interface sound-parsing
/*
	this.JSON:
{
	["key","string","....."]
	["uuid","string","....."]
	["topic","list",".....","queries","maps"]
	["lang","list",".....","ru-RU","en-US","uk-UK","tr-TR"]
}
*/
func (sp *SoundParsing) GetParamHTMLForInsertingSettings() (paramHTML string, err error) {
	return sp.getParamHTML()
}

// SetSettingsFromTheJSON set settings from the JSON format
func (sp *SoundParsing) SetSettingsFromTheJSON(settingsJSON []byte) (msg string, err error) {
	var settings *Settings
	err = json.Unmarshal(settingsJSON, settings)
	if err != nil {
		err = errors.New("yandex SoundParsing: " + err.Error())
		return
	}

	err = soundparsing.SetSettingsServer(sp.nameID, settings)
	if err != nil {
		err = errors.New("yandex SoundParsing: " + err.Error())
		return
	}
	sp.Settings = settings

	msg = "Ok"
	return
}

// IsSupporting sound parsing ?
func (sp *SoundParsing) IsSupporting() (msg string, supporting bool) {
	supporting = true
	if sp.Settings.Key == "" {
		msg += "No key. "
		supporting = false
	}
	if sp.Settings.Lang == "" {
		msg += "No lang. "
		supporting = false
	}
	if sp.Settings.Topic == "" {
		msg += "No topic. "
		supporting = false
	}
	if sp.Settings.UUID == "" {
		msg += "No UUID. "
		supporting = false
	}
	if supporting {
		msg = "Ok"
	}
	return
}
