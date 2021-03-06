package models

import (
	"errors"
	"strconv"
)

// InsertСontrolled added record to DB
func InsertСontrolled(record *Сontrolled) (ID int, err error) {
	if record.CommonBuffer == -1 {
		record.CommonBuffer = 0
	}
	locker.Lock()
	defer locker.Unlock()
	mainModel.IncrementForInsertСontrolleddID++
	ID = mainModel.IncrementForInsertСontrolleddID
	if record.Name == "" {
		record.Name = "Name: " + strconv.Itoa(ID)
	}
	mainModel.Сontrolleds[ID] = record
	err = Save()
	return
}

// UpdateСontrolled  update field
// if the CommonBuffer is -1 then not update,
func UpdateСontrolled(record *Сontrolled, controlledID int) (controlledAddID int, err error) {
	locker.Lock()
	defer locker.Unlock()
	recordUpdate := mainModel.Сontrolleds[controlledID]
	if recordUpdate == nil {
		err = errors.New("Models: Not found record 'Controlled' for update")
		return
	}
	if record.Host == "" {
		record.Host = recordUpdate.Host
	}
	if record.Port == "" {
		record.Port = recordUpdate.Port
	}
	if record.Name == "" {
		record.Name = recordUpdate.Name
	}
	if record.CommonBuffer == -1 {
		record.CommonBuffer = recordUpdate.CommonBuffer
	}
	if record.HomeControlID == "" {
		record.HomeControlID = recordUpdate.HomeControlID
	}
	mainModel.Сontrolleds[controlledID] = record
	controlledAddID = controlledID
	err = Save()
	return
}

// DeleteСontrolled delete controlled
func DeleteСontrolled(ID int) (err error) {
	locker.Lock()
	defer locker.Unlock()
	mainModel.Сontrolleds[ID] = nil
	err = Save()
	return
}

// GetСontrolleds get map Controlleds
func GetСontrolleds() (controlleds map[int]*Сontrolled) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.Сontrolleds
}

// GetСontrolled return Сontrolled
func GetСontrolled(ID int) (controlled *Сontrolled) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.Сontrolleds[ID]
}

// GetCommonBuffer return CommonBuffer
func GetCommonBuffer() string {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.CommonBuffer
}

// SetCommonBuffer set CommonBuffer
func SetCommonBuffer(buffer string) error {
	locker.Lock()
	defer locker.Unlock()
	mainModel.CommonBuffer = buffer
	return Save()
}
