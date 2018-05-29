package controlsystemhome

import (
	"homecontrol/goserver/models"
	"homecontrol/goserver/services/usecontrol"
)

// ListControlSystemHome list
type ListControlSystemHome struct {
	NameID string
	Active bool
}

// ControlSystemHome implements third-party home management systems
// used *models.CommandRecord.StringCommand as objectID
// *models.CommandRecord.Command interpret for oneself
// *models.Сontrolled.Host and *models.Сontrolled.Port are relevant for ControlSystemHome
// nameID == controlSystemID
type ControlSystemHome interface {
	GetNameID() (nameID string)
	RequestToHomeControlSystem(controlled *models.Сontrolled, commandRecord *models.CommandRecord) (msg string, err error)
	GetInfoJSON() (json string, err error)
	GetInfoString() (str string, err error)
	GetListObjectsJSON() (json string, err error)
	GetListCommands() (listCommands *models.ListCommands, err error)
	GetParamHTMLForInsertingSettings() (paramHTML string, err error)
	SetSettingsFromTheJSON(settingsJSON []byte) (msg string, err error)
	IsSupporting() (msg string, supporting bool)
}

// ControlSystemHomeInterfaces map all ControlSystemHome
var ControlSystemHomeInterfaces = make(map[string]ControlSystemHome)

// RegisterControlSystem registers сontrolSystemHome
func RegisterControlSystem(nameControl string, сontrolSystemHome ControlSystemHome) {
	ControlSystemHomeInterfaces[nameControl] = сontrolSystemHome
}

// GetNameID return is the name, this id
func GetNameID() (nameID string) {
	return
}

// RequestToHomeControlSystem action request
func RequestToHomeControlSystem(controlled *models.Сontrolled, commandRecord *models.CommandRecord) (msg string, err error) {
	return
}

// GetInfoJSON return ["info", "info", "info", "info", "info", "info"]
func GetInfoJSON() (json string, err error) {
	return
}

// GetInfoString return in arbitrary format
func GetInfoString() (str string, err error) {
	return
}

// GetListObjectsJSON return {["objectID", "info object"], ["objectID", "info object"], ["", ""]...}
func GetListObjectsJSON() (json string, err error) {
	return
}

// GetListCommands return interface commands list
func GetListCommands() (listCommands *models.ListCommands, err error) {
	return
}

// GetParamHTMLForInsertingSettings return param field for HTML for inserting settings from the client to interface ControlSystemHome
/*
	JSON:
{
	["namefield","typefild","value"]
	["key","string",""]
	["uuid","string","fdgdgme-sdfsw-asdsa"]
	["parse","bool","false"] //will return from the client "parse": false
	["id","int","1990"] //will return from the client "id": 1990
	["fieldListName","list","value","en","sp","ru"]
	["lang","list","ru","en","sp","ru"] //will return from the client "lang": "ru" //first field to up
	["create key google","url","https://google.com"]
}
*/
func GetParamHTMLForInsertingSettings() (paramHTML string, err error) {
	return
}

// SetSettingsFromTheJSON set settings from the JSON format
func SetSettingsFromTheJSON(settingsJSON []byte) (msg string, err error) {
	return
}

// IsSupporting system ?
func IsSupporting() (msg string, supporting bool) {
	return
}

// SetSettingsServer insert settings to server DB
func SetSettingsServer(controlSystemID string, settings interface{}) (err error) {
	return models.SetSettingsAdditionControlSystem(settings, controlSystemID)
}

// GetSettingsServer get settings from the server DB
// Convert the interface to JSON, then convert JSON to the required structure !
func GetSettingsServer(controlSystemID string) (settings interface{}) {
	return models.GetSettingsAdditionControlSystem(controlSystemID)
}

// InMessage receives a message
// this function is created for ControlSystemHome
// do not use for server !
func InMessage(controlSystemID, msg string) (outServerMsg string, err error) {
	return usecontrol.IncomingMessageDistributor(controlSystemID, msg)
}

// GetListControlSystemHome return list
func GetListControlSystemHome() (listControlSystemHome []*ListControlSystemHome) {
	for key, val := range ControlSystemHomeInterfaces {
		_, active := val.IsSupporting()
		listControlSystemHome = append(listControlSystemHome, &ListControlSystemHome{
			NameID: key,
			Active: active,
		})
	}
	return
}

// GetInfoControlSystemHomeInterfaces return in arbitrary format
func GetInfoControlSystemHomeInterfaces() (str string, err error) {
	strStart := "Info third-party home management systems:\n"
	controlleds := models.GetСontrolleds()

	for _, controlled := range controlleds {
		if controlled.HomeControlID == "" {
			continue
		}
		info, err := ControlSystemHomeInterfaces[controlled.HomeControlID].GetInfoString()
		if err == nil {
			str += controlled.Name + ":\n" + info + "\n"
		} else {
			str += controlled.Name + ": Not work\n"
		}
	}

	if str == "" {
		str += "No third-party home management systems\n"
	}

	str = strStart + str
	return
}
