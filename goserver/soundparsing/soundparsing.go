package soundparsing

//Min 16000 SampleRate
import (
	"bytes"
	"encoding/xml"
	"errors"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"

	"homecontrol/goserver/models"
)

// RecognitionResults Reply with Yandex, format: xml
type RecognitionResults struct {
	XMLName xml.Name `xml:"recognitionResults"`
	Variant []string `xml:"variant"`
}

// CompareCommand compate text and return ID command and contolled
func CompareCommand(commandControlled, commandRecord string) (controlledID int, commandID string, err error) {
	commandControlled = strings.ToLower(commandControlled)
	commandRecord = strings.ToLower(commandRecord)

	getCommandRecord := models.GetCommandRecord(commandControlled)
	if getCommandRecord == nil {
		err = errors.New("SoundParsing: Not found controlledID")
	} else {
		controlledID = getCommandRecord.СontrolledID
		if getCommandRecord.TypeRecord != 1 {
			err = errors.New("SoundParsing: Not found controlledID")
		}
	}

	getCommandRecord = models.GetCommandRecord(commandRecord)
	if getCommandRecord == nil {
		err = errors.New("SoundParsing: Not found commandID")
	} else {
		if getCommandRecord.TypeRecord != 2 {
			err = errors.New("SoundParsing: Not found commandID")
			return
		}
		commandID = commandRecord
	}
	return
}

var (
	UUID    = ""
	KEY     = ""
	QUERIES = ""
	LANG    = ""
)

func init() {
	raw, err := ioutil.ReadFile(models.Path + "soundparsing/uuid.txt")
	if err == nil {
		UUID = string(raw)
	}
	raw, err = ioutil.ReadFile(models.Path + "soundparsing/key.txt")
	if err == nil {
		KEY = string(raw)
	}
	raw, err = ioutil.ReadFile(models.Path + "soundparsing/queries.txt")
	if err == nil {
		QUERIES = string(raw)
	}
	raw, err = ioutil.ReadFile(models.Path + "soundparsing/lang.txt")
	if err == nil {
		LANG = string(raw)
	}
}

// SetSettings sets the settings for parsing the sound on the server
func SetSettings(uuid, key, queries, lang string) error {
	if uuid != "" {
		err := ioutil.WriteFile("soundparsing/uuid.txt", []byte(uuid), 0666)
		if err != nil {
			return err
		}
		UUID = uuid
	}
	if key != "" {
		err := ioutil.WriteFile("soundparsing/key.txt", []byte(key), 0666)
		if err != nil {
			return err
		}
		KEY = key
	}
	if queries != "" {
		err := ioutil.WriteFile("soundparsing/queries.txt", []byte(queries), 0666)
		if err != nil {
			return err
		}
		QUERIES = queries
	}
	if lang != "" {
		err := ioutil.WriteFile("soundparsing/lang.txt", []byte(lang), 0666)
		if err != nil {
			return err
		}
		LANG = lang
	}
	return nil
}

// GetSettings returns sound parsing settings
func GetSettings() (uuid, key, queries, lang string) {
	uuid = UUID
	key = KEY
	queries = QUERIES
	lang = LANG
	return
}

// GetIDCommandANDControlledBySound get ID controlled and command
func GetIDCommandANDControlledBySound(sound []byte) (controlledID int, commandID string, err error) {
	if len(sound) < 44 {
		err = errors.New("SoundParsing: Not sound, size sound - " + strconv.Itoa(len(sound)) + " byte")
		return
	}
	if KEY == "" {
		err = errors.New("SoundParsing: No KEY for Yandex")
		return
	}

	var recognitionResults RecognitionResults
	buffer := bytes.NewBuffer(sound)
	URL := "https://asr.yandex.net/asr_xml?uuid=" + UUID + "&key=" + KEY + "&topic=" + QUERIES + "&lang=" + LANG
	req, err := http.NewRequest("POST", URL, buffer)
	if err != nil {
		return
	}
	req.Header.Add("Content-type", "audio/x-wav")
	client := new(http.Client)
	resp, err := client.Do(req)
	if err != nil {
		return
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
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
			controlledID, commandID, err = CompareCommand(variants[0], strings.Join(variants[1:], " "))
			if err != nil {
				continue
			}
			break
		}
	}

	if controlledID == 0 && commandID == "" {
		err = ErrNotFoundIDCommandAndIDControlled
		return
	}
	if controlledID == 0 {
		err = ErrNotFoundIDControlled
		return
	}
	if commandID == "" {
		err = ErrNotFoundIDCommand
		return
	}

	return
}

// Errors for func GetIDCommandANDControlledBySound
var (
	ErrNotFoundIDCommand                = errors.New("SoundParsing: Not found id command")
	ErrNotFoundIDControlled             = errors.New("SoundParsing: Not found id controlled")
	ErrNotFoundIDCommandAndIDControlled = errors.New("SoundParsing: Not found id controlled and id command")
)
