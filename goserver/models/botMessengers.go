package models

import ()

// SetSettingsBotMessenger insert settings to DB
func SetSettingsBotMessenger(record interface{}, ID string) (err error) {
	locker.Lock()
	defer locker.Unlock()
	mainModel.BotMessengersSettings[ID] = record
	err = Save()
	return
}

// DeleteSettingsBotMessenger delete settings from the DB
func DeleteSettingsBotMessenger(ID string) (err error) {
	locker.Lock()
	defer locker.Unlock()
	mainModel.BotMessengersSettings[ID] = nil
	err = Save()
	return
}

// GetSettingsBotMessengers get settings to all bots-messengers from the DB
func GetSettingsBotMessengers() (botMessengersSettings map[string]interface{}) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.BotMessengersSettings
}

// GetSettingsBotMessenger get settings from the DB
func GetSettingsBotMessenger(ID string) (botMessengerSettings interface{}) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.BotMessengersSettings[ID]
}
