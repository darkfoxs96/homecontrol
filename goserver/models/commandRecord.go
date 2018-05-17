package models

import ()

func InsertCommandRecord(record *CommandRecord, ID string) (err error) {
	locker.Lock()
	defer locker.Unlock()
	mainModel.CommandRecords[ID] = record
	err = Save()
	return
}

func DeleteCommandRecord(ID string) (err error) {
	locker.Lock()
	defer locker.Unlock()
	mainModel.CommandRecords[ID] = nil
	err = Save()
	return
}

func GetCommandRecords() (commandRecords map[string]*CommandRecord) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.CommandRecords
}

func GetCommandRecord(ID string) (commandRecord *CommandRecord) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.CommandRecords[ID]
}
