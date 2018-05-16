package models

import (
	"errors"
	"strconv"
)

func InsertСontrolled(record *Сontrolled) (ID int, err error) {
	mainModel.IncrementForInsertСontrolleddID++
	ID = mainModel.IncrementForInsertСontrolleddID
	if record.Name == "" {
		record.Name = "Name: " + strconv.Itoa(ID)
	}
	mainModel.Сontrolleds[ID] = record
	err = Save()
	return
}

func UpdateСontrolled(record *Сontrolled, controlledID int) (controlledAddID int, err error) {
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
	mainModel.Сontrolleds[controlledID] = record
	controlledAddID = controlledID
	err = Save()
	return
}

func DeleteСontrolled(ID int) (err error) {
	mainModel.Сontrolleds[ID] = nil
	err = Save()
	return
}

func GetСontrolleds() (controlleds map[int]*Сontrolled) {
	return mainModel.Сontrolleds
}

func GetСontrolled(ID int) (controlled *Сontrolled) {
	return mainModel.Сontrolleds[ID]
}
