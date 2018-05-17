package models

import (
	"errors"
	"strconv"
)

func InsertСontrolled(record *Сontrolled) (ID int, err error) {
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
	if record.HomeControlID == -1 {
		record.HomeControlID = recordUpdate.HomeControlID
	}
	mainModel.Сontrolleds[controlledID] = record
	controlledAddID = controlledID
	err = Save()
	return
}

func DeleteСontrolled(ID int) (err error) {
	locker.Lock()
	defer locker.Unlock()
	mainModel.Сontrolleds[ID] = nil
	err = Save()
	return
}

func GetСontrolleds() (controlleds map[int]*Сontrolled) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.Сontrolleds
}

func GetСontrolled(ID int) (controlled *Сontrolled) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.Сontrolleds[ID]
}

func GetCommonBuffer() string {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.CommonBuffer
}

func SetCommonBuffer(buffer string) error {
	locker.Lock()
	defer locker.Unlock()
	mainModel.CommonBuffer = buffer
	return Save()
}
