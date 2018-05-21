package commandrecord

import (
	"errors"
	"strings"

	"homecontrol/goserver/models"
	"homecontrol/goserver/services/controlled"
	"homecontrol/goserver/soundparsing"
)

// Record struct for commandrecord
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
		err = errors.New("No ID")
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
	return controlled.RequestToControlled(controlled.GetControlled(controlledID), GetCommandRecord(commandID))
}

// UsedTextCommand used text to command
func UsedTextCommand(command string) (responseMessage string, err error) {
	command = strings.Replace(command, ",", "", -1)
	command = strings.Replace(command, ".", "", -1)
	commands := strings.Split(command, " ")
	controlledID, commandID, _ := soundparsing.CompareCommand(commands[0], strings.Join(commands[1:], " "))

	if controlledID == 0 && commandID == "" {
		err = soundparsing.ErrNotFoundIDCommandAndIDControlled
	}
	if controlledID == 0 {
		err = soundparsing.ErrNotFoundIDControlled
	}
	if commandID == "" {
		err = soundparsing.ErrNotFoundIDCommand
	}

	return controlled.RequestToControlled(controlled.GetControlled(controlledID), GetCommandRecord(commandID))
}

// GetCommandRecords return command record map
func GetCommandRecords() (commandRecords map[string]*models.CommandRecord) {
	return models.GetCommandRecords()
}

// GetCommandRecord return command record bu ID
func GetCommandRecord(ID string) (commandRecord *models.CommandRecord) {
	return models.GetCommandRecord(ID)
}

// AddCommandRecord insert command record to storage
func AddCommandRecord(record *models.CommandRecord, ID string) error {
	return models.InsertCommandRecord(record, ID)
}

// DeleteCommandRecord delete command record bu ID
func DeleteCommandRecord(ID string) error {
	return models.DeleteCommandRecord(ID)
}

// GetListCommands return controlled commands list
func GetListCommands() (commandsList *models.ListCommands) {
	commandsList.Name = "controlled"
	commandsList.StartRangeIDCommands = 0
	commandsList.EndRangeIDCommands = 999
	commandsList.Commands =
		[]*models.Command{&models.Command{
			ID: 0, InfoCommand: "Put buffer",
		}, &models.Command{
			ID: 1, InfoCommand: "Open page from the buffer",
		}, &models.Command{
			ID: 2, InfoCommand: "Stop",
		}, &models.Command{
			ID: 3, InfoCommand: "Sound off",
		}, &models.Command{
			ID: 4, InfoCommand: "Sound on",
		}, &models.Command{
			ID: 5, InfoCommand: "off",
		}, &models.Command{
			ID: 6, InfoCommand: "Open youtube",
		}, &models.Command{
			ID: 7, InfoCommand: "Open vk",
		}, &models.Command{
			ID: 8, InfoCommand: "Open ok",
		}, &models.Command{
			ID: 9, InfoCommand: "Open fecebook",
		}, &models.Command{
			ID: 10, InfoCommand: "Open",
		}, &models.Command{
			ID: 11, InfoCommand: "Used code in terminal",
		}}
	return
}
