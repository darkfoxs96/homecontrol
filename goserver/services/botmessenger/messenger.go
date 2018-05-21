package botmessenger

import (
	"homecontrol/goserver/models"
	"homecontrol/goserver/services/commandrecord"
	"homecontrol/goserver/services/controlled"
	"homecontrol/goserver/services/controlsystemhome"
)

// ListMessengers list
type ListMessengers struct {
	NameID string
	Active bool
}

// BotMessenger implements bot-messengers
// nameID == messengerID
type BotMessenger interface {
	GetNameID() (nameID string)
	OutMessage(message string) (responseMsg string, err error)
	IsSupporting() (msg string, supporting bool)
	SetSettings(tokenAPI string, password string) (msg string, err error)
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

// SetSettings set settings to BotMessenger
func SetSettings(tokenAPI string, password string) (msg string, err error) {
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
func InMessage(messengerID, msg string) (outServerMsg string, err error) {
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

	outServerMsg, err = commandrecord.UsedTextCommand(msg)
	if err != nil {
		return
	}
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
