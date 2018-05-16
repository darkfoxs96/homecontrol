package commandrecord

import (
	"errors"
	"strings"

	"homecontrol/goserver/models"	
	"homecontrol/goserver/soundparsing"	
	"homecontrol/goserver/services/controlled"	
)

type Record struct {
	ID            string
	Sound         []byte
	TypeRecord    byte
	Command       int
	StringCommand string
	NumberOfWords int
	СontrolledID  int
}

// AddOrUpdateRecord create or update Record
func AddOrUpdateRecord(record *Record) (err error) {
	if record.ID == "" {
		err = errors.New("SoundParsing: No ID!")
		return
	}

	record.NumberOfWords = len(strings.Split(record.ID, " "))

	record.ID = strings.ToLower(record.ID)
	soundRecord := &models.CommandRecord{
		TypeRecord:    record.TypeRecord,
		Command:       record.Command,
		StringCommand: record.StringCommand,
		NumberOfWords: record.NumberOfWords,
		СontrolledID:  record.СontrolledID,
	}
	err = models.InsertCommandRecord(soundRecord, record.ID)
	return
}

// UsedSoundCommand sound to command and used command
func UsedSoundCommand(sound []byte) (responseMessage string, err error) {
	controlledID, commandID, err := soundparsing.GetIDCommandANDControlledBySound(sound)
	if err != nil {
		return
	}
	return controlled.RequestToControlled(controlledID, commandID)
}

// UsedTextCommand used text to command
func UsedTextCommand(command string) (responseMessage string, err error) {
	command = strings.Replace(command, ",", "", -1)
	command = strings.Replace(command, ".", "", -1)
	commands := strings.Split(command, " ")
	controlledID, commandID, _ := soundparsing.CompareCommand(commands[0], strings.Join(commands[1:], " "))

	if controlledID == 0 && commandID == "" {
		err = soundparsing.ErrNotFoundIdCommandAndIdControlled	
	}
	if controlledID == 0 {
		err = soundparsing.ErrNotFoundIdControlled		
	}
	if commandID == "" {
		err = soundparsing.ErrNotFoundIdCommand
	}

	return controlled.RequestToControlled(controlledID, commandID)
}