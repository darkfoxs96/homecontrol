package controlled

import (
	"bytes"
	"encoding/binary"
	"io/ioutil"
	"net/http"

	"homecontrol/goserver/models"
	"homecontrol/goserver/services/controlsystemhome"
	"homecontrol/goserver/services/usecontrol"	
)

// RequestToControlled action request
func RequestToControlled(controlled *models.Сontrolled, command *models.CommandRecord) (responseMessage string, err error) {
	if controlled.HomeControlID != "" {
		responseMessage, err = controlsystemhome.ControlSystemHomeInterfaces[controlled.HomeControlID].RequestToHomeControlSystem(controlled, command)
		return
	}
	buffer := bytes.NewBuffer(nil)
	err = binary.Write(buffer, binary.LittleEndian, int32(command.Command))
	if err != nil {
		return
	}
	buffer.Write([]byte(command.StringCommand))

	URL := ""
	if controlled.Port != "" {
		URL = "http://" + controlled.Host + ":" + controlled.Port
	} else {
		URL = "http://" + controlled.Host
	}
	req, err := http.NewRequest("POST", URL, buffer)
	if err != nil {
		return
	}
	client := new(http.Client)
	resp, err := client.Do(req)
	if err != nil {
		return
	}
	defer resp.Body.Close()
	responseByte, err := ioutil.ReadAll(resp.Body)
	responseMessage = string(responseByte)
	if err != nil {
		return
	}
	return
}

// RegistrationAndUpdateControlled create record 'controlled' or update
func RegistrationAndUpdateControlled(controlledID int, host, port, name string, commonBuffer int, homeControlID string) (controlledAddID int, err error) {
	controlled := models.Сontrolled{
		Host:          host,
		Port:          port,
		Name:          name,
		CommonBuffer:  commonBuffer,
		HomeControlID: homeControlID,
	}
	if controlledID > 0 {
		controlledAddID, err = models.UpdateСontrolled(&controlled, controlledID)
	} else {
		controlledAddID, err = models.InsertСontrolled(&controlled)
	}
	return
}

// GetControlleds return controlled map
func GetControlleds() (controlleds map[int]*models.Сontrolled) {
	return models.GetСontrolleds()
}

// GetControlled return controlled bu ID
func GetControlled(ID int) (controlled *models.Сontrolled) {
	return models.GetСontrolled(ID)
}

// DeleteControlled delete controlled bu ID
func DeleteControlled(ID int) error {
	return models.DeleteСontrolled(ID)
}

// GetInfoControlledsString return in arbitrary format
func GetInfoControlledsString() (str string, err error) {
	strStart := "Information on controlled:\n"
	controlleds := models.GetСontrolleds()
	command := &models.CommandRecord{
		Command: 12,
	}

	for _, controlled := range controlleds {
		if controlled.HomeControlID != "" {
			continue
		}
		_, err := RequestToControlled(controlled, command)
		if err == nil {
			str += controlled.Name + ": Work\n"
		} else {
			str += controlled.Name + ": Not work\n"
		}
	}

	if str == "" {
		str += "No controlled\n"
	}

	str = strStart + str
	return
}

// InMessage receives a message
func InMessage(controlledID int, msg string) (outServerMsg string, err error) {
	return usecontrol.IncomingMessageDistributor(controlledID, msg)
}
