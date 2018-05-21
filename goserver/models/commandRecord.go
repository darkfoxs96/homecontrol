package models

import ()

// InsertCommandRecord add CommandRecord
func InsertCommandRecord(record *CommandRecord, ID string) (err error) {
	locker.Lock()
	defer locker.Unlock()
	mainModel.CommandRecords[ID] = record
	err = Save()
	return
}

// DeleteCommandRecord CommandRecords[ID] = nil
func DeleteCommandRecord(ID string) (err error) {
	locker.Lock()
	defer locker.Unlock()
	mainModel.CommandRecords[ID] = nil
	err = Save()
	return
}

// GetCommandRecords get map CommandRecord
func GetCommandRecords() (commandRecords map[string]*CommandRecord) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.CommandRecords
}

// GetCommandRecord get command record, by ID
func GetCommandRecord(ID string) (commandRecord *CommandRecord) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.CommandRecords[ID]
}
