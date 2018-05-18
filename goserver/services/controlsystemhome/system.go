package controlsystemhome

import (
	"homecontrol/goserver/models"
)

// ControlSystemHome implements third-party home management systems
// used *models.CommandRecord.StringCommand as objectID
// *models.CommandRecord.Command interpret for oneself
// *models.Сontrolled.Host and *models.Сontrolled.Port are relevant for ControlSystemHome
type ControlSystemHome interface {
	RequestToHomeControlSystem(controlled *models.Сontrolled, commandRecord *models.CommandRecord) (msg string, err error)
	GetInfoHTML() (html string, err error)
	GetInfoJSON() (json string, err error)
	GetInfoString() (str string, err error)
	GetInfoObjectString(objectID string) (str string, err error)
	GetListObjectsJSON() (json string, err error)
	GetListCommandsJSON() (json string, err error)
	IsSupporting() (msg string, err bool)
}

// ControlSystemHomeInterfaces map all ControlSystemHome
var ControlSystemHomeInterfaces = make(map[string]ControlSystemHome)

// RegisterControlSystem registers сontrolSystemHome
func RegisterControlSystem(nameControl string, сontrolSystemHome ControlSystemHome) {
	ControlSystemHomeInterfaces[nameControl] = сontrolSystemHome
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

// GetListCommandsJSON return {[commandID, "info command"], [commandID, "info command"], [int, ""]...}
func GetListCommandsJSON() (json string, err error) {
	return
}

// IsSupporting system ?
func IsSupporting() (msg string, err bool) {
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
