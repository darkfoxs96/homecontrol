package models

import ()

// SetSettingsAdditionControlSystem insert settings to DB
func SetSettingsAdditionControlSystem(record interface{}, ID string) (err error) {
	locker.Lock()
	defer locker.Unlock()
	mainModel.AdditionControlSystemSettings[ID] = record
	err = Save()
	return
}

// DeleteSettingsAdditionControlSystem delete settings from the DB
func DeleteSettingsAdditionControlSystem(ID string) (err error) {
	locker.Lock()
	defer locker.Unlock()
	mainModel.AdditionControlSystemSettings[ID] = nil
	err = Save()
	return
}

// GetSettingsAdditionControlSystems get settings to all addition control system from the DB
func GetSettingsAdditionControlSystems() (additionControlSystemsSettings map[string]interface{}) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.AdditionControlSystemSettings
}

// GetSettingsAdditionControlSystem get settings from the DB
func GetSettingsAdditionControlSystem(ID string) (additionControlSystemSettings interface{}) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.AdditionControlSystemSettings[ID]
}
