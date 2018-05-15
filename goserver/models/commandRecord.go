package models

import ()

func InsertCommandRecord(record *CommandRecord, ID string) (err error) {
	mainModel.CommandRecords[ID] = record
	err = Save()
	return
}

func DeleteCommandRecord(ID string) (err error) {
	mainModel.CommandRecords[ID] = nil
	err = Save()
	return
}

func GetCommandRecords() (commandRecords map[string]*CommandRecord) {
	return mainModel.CommandRecords
}

func GetCommandRecord(ID string) (commandRecord *CommandRecord) {
	return mainModel.CommandRecords[ID]
}
