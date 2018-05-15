package soundparsing

//Min 8000 SampleRate
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

// Reply with Yandex, format: xml
type RecognitionResults struct {
	XMLName xml.Name `xml:"recognitionResults"`
	Variant []string `xml:"variant"`
}

func compareCommand(commandControlled, commandRecord string) (controlledID int, commandID string, err error) {
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

func init() {
	raw, err := ioutil.ReadFile(models.Path + "uuid.txt")
	if err == nil {
		UUID = string(raw)
	}
	raw, err = ioutil.ReadFile(models.Path + "key.txt")
	if err == nil {
		KEY = string(raw)
	}
	raw, err = ioutil.ReadFile(models.Path + "queries.txt")
	if err == nil {
		QUERIES = string(raw)
	}
	raw, err = ioutil.ReadFile(models.Path + "lang.txt")
	if err == nil {
		LANG = string(raw)
	}
}

var (
	UUID    = ""
	KEY     = ""
	QUERIES = ""
	LANG    = ""
)

//Get ID controlled and command
func GetIDCommandANDControlledBySound(sound []byte) (controlledID int, commandID string, err error) {
	if len(sound) < 44 {
		err = errors.New("SoundParsing: Not sound, size sound - " + strconv.Itoa(len(sound)) + " byte")
		return
	}

	var recognitionResults RecognitionResults
	buffer := bytes.NewBuffer(sound)
	endpoint := "https://asr.yandex.net/asr_xml?uuid=" + UUID + "&key=" + KEY + "&topic=" + QUERIES + "&lang=" + LANG
	req, err := http.NewRequest("POST", endpoint, buffer)
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
			controlledID, commandID, err = compareCommand(variants[0], strings.Join(variants[1:], " "))
			if err != nil {
				continue
			}
			break
		}
	}

	if controlledID == 0 && commandID == "" {
		err = ErrNotFoundIdCommandAndIdControlled
		return
	}
	if controlledID == 0 {
		err = ErrNotFoundIdControlled
		return
	}
	if commandID == "" {
		err = ErrNotFoundIdCommand
		return
	}

	return
}

// Errors for func GetIDCommandANDControlledBySound
var (
	ErrNotFoundIdCommand                = errors.New("SoundParsing: Not found id command")
	ErrNotFoundIdControlled             = errors.New("SoundParsing: Not found id controlled")
	ErrNotFoundIdCommandAndIdControlled = errors.New("SoundParsing: Not found id controlled and id command")
)
