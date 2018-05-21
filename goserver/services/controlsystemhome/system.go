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
	GetInfoHTML() (html string, err error)
	GetInfoJSON() (json string, err error)
	GetInfoString() (str string, err error)
	GetInfoObjectString(objectID string) (str string, err error)
	GetListObjectsJSON() (json string, err error)
	GetListCommandsJSON() (json string, err error)
	GetListCommands() (listCommands *models.ListCommands, err error)
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

// GetInfoHTML return HTML for webApp
func GetInfoHTML() (html string, err error) {
	return
}

// GetInfoJSON return {["name", "info"], ["name", "info"], ["", ""]...}
func GetInfoJSON() (json string, err error) {
	return
}

// GetInfoString return in arbitrary format
func GetInfoString() (str string, err error) {
	return
}

// GetInfoObjectString return in arbitrary format
func GetInfoObjectString(objectID string) (str string, err error) {
	return
}

// GetListObjectsJSON return {["objectID", "info object"], ["objectID", "info object"], ["", ""]...}
func GetListObjectsJSON() (json string, err error) {
	return
}

// GetListCommandsJSON return {[1001, "info command"], [1002, "info command"], [int, ""]...}
func GetListCommandsJSON() (json string, err error) {
	return
}

// GetListCommands return interface commands list
func GetListCommands() (listCommands *models.ListCommands, err error) {
	return
}

// IsSupporting system ?
func IsSupporting() (msg string, supporting bool) {
	return
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
