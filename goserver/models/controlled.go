package models

import ()

func InsertСontrolled(record *Сontrolled) (ID int, err error) {
	mainModel.IncrementForInsertСontrolleddID++
	ID = mainModel.IncrementForInsertСontrolleddID
	mainModel.Сontrolleds[ID] = record
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
