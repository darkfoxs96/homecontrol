package soundparsing

import (
	"errors"
	"fmt"
	"strings"

	"homecontrol/goserver/models"
)

// ListSoundParsings list
type ListSoundParsings struct {
	NameID string
	Active bool
}

var (
	usedSoundParsingID string
)

func init() {
	usedSoundParsingID = GetUsedSoundParsingID()

	if usedSoundParsingID == "" {
		for _, val := range GetListSoundParsing() {
			if val.Active {
				SetUsedSoundParsingID(val.NameID)
				break
			}
		}
	}

	if usedSoundParsingID == "" {
		fmt.Println("SoundParsing: Error, no active sound parsings, usedSoundParsingID = ''")
	}
}

// SoundParsing interface for sound parsing
type SoundParsing interface {
	GetNameID() (nameID string)
	GetIDCommandANDControlledBySound(sound []byte) (controlledID int, commandID string, err error)
	GetParamHTMLForInsertingSettings() (paramHTML string, err error)
	SetSettingsFromTheJSON(settingsJSON []byte) (msg string, err error)
	IsSupporting() (msg string, supporting bool)
}

// SoundParsingInterfaces interfaces for sound parsing
var SoundParsingInterfaces = make(map[string]SoundParsing)

// RegisterSoundParsing registers soundParsing
func RegisterSoundParsing(nameSoundParsing string, soundParsing SoundParsing) {
	SoundParsingInterfaces[nameSoundParsing] = soundParsing
}

// GetNameID return is the name, this id
func GetNameID() (nameID string) {
	return
}

// GetIDCommandANDControlledBySound get ID controlled and command
func GetIDCommandANDControlledBySound(sound []byte) (controlledID int, commandID string, err error) {
	return
}

// GetParamHTMLForInsertingSettings return param field for HTML for inserting settings from the client to interface sound-parsing
/*
	JSON:
{
	["namefield","typefild","value"]
	["key","string",""]
	["uuid","string","fdgdgme-sdfsw-asdsa"]
	["parse","bool","false"] //will return from the client "parse": false
	["id","int","1990"] //will return from the client "id": 1990
	["fieldListName","list","value","en","sp","ru"]
	["lang","list","ru","en","sp","ru"] //will return from the client "lang": "ru" //first field to up
	["create key google","url","https://google.com"]
}
*/
func GetParamHTMLForInsertingSettings() (paramHTML string, err error) {
	return
}

// SetSettingsFromTheJSON set settings from the JSON format
func SetSettingsFromTheJSON(settingsJSON []byte) (msg string, err error) {
	return
}

// IsSupporting sound parsing ?
func IsSupporting() (msg string, supporting bool) {
	return
}

// UseDefaultIDForParsingSound use default ID for parsing sound
func UseDefaultIDForParsingSound(sound []byte) (controlledID int, commandID string, err error) {
	if usedSoundParsingID == "" {
		err = errors.New("SoundParsing: Error UseDefaultIDForParsingSound(), no set used sound parsing ID default")
		return
	}
	if msgParsing, active := SoundParsingInterfaces[usedSoundParsingID].IsSupporting(); !active {
		err = errors.New("SoundParsing: Error UseDefaultIDForParsingSound(), used sound parsing ID not active, " + msgParsing)
		return
	}
	controlledID, commandID, err = SoundParsingInterfaces[usedSoundParsingID].GetIDCommandANDControlledBySound(sound)
	return
}

// GetListSoundParsing return list
func GetListSoundParsing() (listMessengers []*ListSoundParsings) {
	for key, val := range SoundParsingInterfaces {
		_, active := val.IsSupporting()
		listMessengers = append(listMessengers, &ListSoundParsings{
			NameID: key,
			Active: active,
		})
	}
	return
}

// GetUsedSoundParsingID get used sound parsing ID
func GetUsedSoundParsingID() (soundParsingID string) {
	return models.GetUsedSoundParsingID()
}

// SetUsedSoundParsingID set used sound parsing ID
func SetUsedSoundParsingID(soundParsingID string) error {
	if _, active := SoundParsingInterfaces[soundParsingID].IsSupporting(); !active {
		return errors.New("SoundParsing: Error SetUsedSoundParsingID(), given soundParsingID is not active")
	}
	err := models.SetUsedSoundParsingID(soundParsingID)
	if err != nil {
		return err
	}
	usedSoundParsingID = soundParsingID
	return nil
}

// SetSettingsServer insert settings to server DB
func SetSettingsServer(soundParsingID string, settings interface{}) (err error) {
	return models.SetSettingsSoundParsing(settings, soundParsingID)
}

// GetSettingsServer get settings from the server DB
// Convert the interface to JSON, then convert JSON to the required structure !
func GetSettingsServer(soundParsingID string) (settings interface{}) {
	return models.GetSettingsSoundParsing(soundParsingID)
}

// CompareCommand compare text and return ID command and contolled
func CompareCommand(words []string) (controlledID int, commandID string, err error) {
	return compare(words[0], strings.Join(words[1:], " "))
}

// compare text and return ID command and contolled
func compare(commandControlled, commandRecord string) (controlledID int, commandID string, err error) {
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

// Errors for interfaces sound parsing
var (
	ErrNotFoundIDCommand                = errors.New("SoundParsing: Not found id command")
	ErrNotFoundIDControlled             = errors.New("SoundParsing: Not found id controlled")
	ErrNotFoundIDCommandAndIDControlled = errors.New("SoundParsing: Not found id controlled and id command")
)
