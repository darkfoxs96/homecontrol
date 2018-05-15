package commandrecord

import (
	"errors"
	"homecontrol/goserver/models"
	"strings"
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
