package models

import ()

func SetSettingsBotMessenger(record *interface{}, ID string) (err error) {
	locker.Lock()
	defer locker.Unlock()
	mainModel.BotMessengersSettings[ID] = record
	err = Save()
	return
}

func DeleteSettingsBotMessenger(ID string) (err error) {
	locker.Lock()
	defer locker.Unlock()
	mainModel.BotMessengersSettings[ID] = nil
	err = Save()
	return
}

func GetSettingsBotMessengers() (botMessengersSettings map[string]*interface{}) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.BotMessengersSettings
}

func GetSettingsBotMessenger(ID string) (botMessengerSettings *interface{}) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.BotMessengersSettings[ID]
}
