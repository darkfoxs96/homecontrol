package commandrecord

import (
	"errors"
	"strings"

	"homecontrol/goserver/models"	
	"homecontrol/goserver/soundparsing"	
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

//Create or update Record
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

// Sound to command and used command
func UsedSoundCommand(sound []byte) error {
	_, _, err := soundparsing.GetIDCommandANDControlledBySound(sound)
	if err != nil {
		return err
	}
	return nil
}

// Used text command
func UsedTextCommand(command string) error {

	return nil
}