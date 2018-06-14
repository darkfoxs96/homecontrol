package botmessenger

import (
	"homecontrol/goserver/models"
	"homecontrol/goserver/services/commandrecord"
	"homecontrol/goserver/services/controlled"
	"homecontrol/goserver/services/controlsystemhome"
)

// ListMessengers list
type ListMessengers struct {
	NameID string `json:"name_id"`
	Active bool   `json:"active"`
}

// BotMessenger implements bot-messengers
// nameID == messengerID
type BotMessenger interface {
	GetNameID() (nameID string)
	OutMessage(message string) (responseMsg string, err error)
	IsSupporting() (msg string, supporting bool)
	GetParamHTMLForInsertingSettings() (paramHTML string, err error)
	SetSettingsFromTheJSON(settingsJSON []byte) (msg string, err error)
}

// BotMessengerInterfaces map all BotMessenger
var BotMessengerInterfaces = make(map[string]BotMessenger)

// RegisterBotMessenger registers botMessenger
func RegisterBotMessenger(nameMessenger string, botMessenger BotMessenger) {
	BotMessengerInterfaces[nameMessenger] = botMessenger
}

// TODO: settings chan  !
func init() {
	go func(ch <-chan string, chClose <-chan struct{}) {
		for true {
			select {
			case msg := <-ch:
				OutMessageToAll(msg)
			case <-chClose:
				close(models.CancelChOutMessageToAll)
				close(models.ChOutMessageToAll)
				return
			}
		}
	}(models.ChOutMessageToAll, models.CancelChOutMessageToAll)
}

// GetNameID return is the name, this id
func GetNameID() (nameID string) {
	return
}

// OutMessage sends message to the clients
func OutMessage(message string) (responseMsg string, err error) {
	return
}

// OutMessageToAll sends message to all the clients
func OutMessageToAll(message string) (responseMsg string, err error) {
	for key, val := range BotMessengerInterfaces {
		response, errr := val.OutMessage(message)
		if errr != nil {
			responseMsg += key + ": message not sent\n"
		} else {
			responseMsg += key + ": message sent, response: " + response + "\n"
		}
	}
	return
}

// IsSupporting messenger ?
func IsSupporting() (msg string, supporting bool) {
	return
}

// SetSettingsFromTheJSON set settings from the JSON format
func SetSettingsFromTheJSON(settingsJSON []byte) (msg string, err error) {
	return
}

// GetParamHTMLForInsertingSettings return param field for HTML for inserting settings from the client to interface BotMessenger
/*
	JSON:
[["namefield","typefild","value"],
["key","string",""],
["uuid","string","fdgdgme-sdfsw-asdsa"],
["parse","bool","false"], //will return from the client "parse": false
["id","int","1990"], //will return from the client "id": 1990
["fieldListName","list","value","en","sp","ru"],
["lang","list","ru","en","sp","ru"], //will return from the client "lang": "ru" //first field to up
["create key google","url","https://google.com"]]
*/
// https://github.com/darkfoxs96/homecontrol#to-all-interfaces
func GetParamHTMLForInsertingSettings() (paramHTML string, err error) {
	return
}

// SetSettingsServer insert settings to server DB
func SetSettingsServer(messengerID string, settings interface{}) (err error) {
	return models.SetSettingsBotMessenger(settings, messengerID)
}

// GetSettingsServer get settings from the server DB
// Convert the interface to JSON, then convert JSON to the required structure !
func GetSettingsServer(messengerID string) (settings interface{}) {
	return models.GetSettingsBotMessenger(messengerID)
}

// InMessage receives a message
// this function is created for BotMessenger
// do not use for server !
func InMessage(messengerID, msg, stringBuffer string) (outServerMsg string, err error) {
	if msg == "info" {
		outServerMsg, err = controlsystemhome.GetInfoControlSystemHomeInterfaces()
		if err != nil {
			return
		}
		str, errr := controlled.GetInfoControlledsString()
		if errr != nil {
			err = errr
			return
		}
		outServerMsg += "\n" + str
		return
	}

	outServerMsg, err = commandrecord.UsedTextCommand(msg, stringBuffer)
	return
}

// GetListMessengers return list
func GetListMessengers() (listMessengers []*ListMessengers) {
	for key, val := range BotMessengerInterfaces {
		_, active := val.IsSupporting()
		listMessengers = append(listMessengers, &ListMessengers{
			NameID: key,
			Active: active,
		})
	}
	return
}
