package models

import (

)

// SetSettingsSoundParsing insert settings to DB
func SetSettingsSoundParsing(record interface{}, ID string) (err error) {
	locker.Lock()
	defer locker.Unlock()
	mainModel.SoundParsingsSettings[ID] = record
	err = Save()
	return
}

// DeleteSettingsSoundParsing delete settings from the DB
func DeleteSettingsSoundParsing(ID string) (err error) {
	locker.Lock()
	defer locker.Unlock()
	mainModel.SoundParsingsSettings[ID] = nil
	err = Save()
	return
}

// GetSettingsSoundParsings get settings to all sound-parsings from the DB
func GetSettingsSoundParsings() (soundParsingsSettings map[string]interface{}) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.SoundParsingsSettings
}

// GetSettingsSoundParsing get settings from the DB
func GetSettingsSoundParsing(ID string) (soundParsingSettings interface{}) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.SoundParsingsSettings[ID]
}

// GetUsedSoundParsingID get used sound parsing ID from the DB
func GetUsedSoundParsingID() (soundParsingID string) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.UsedSoundParsingsID
}

// SetUsedSoundParsingID set used sound parsing ID in DB
func SetUsedSoundParsingID(soundParsingID string) error {
	locker.Lock()
	defer locker.Unlock()
	mainModel.UsedSoundParsingsID = soundParsingID
	return Save()
}