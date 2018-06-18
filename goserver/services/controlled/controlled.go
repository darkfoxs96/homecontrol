package controlled

import (
	"bytes"
	"encoding/binary"
	"errors"
	"io/ioutil"
	"net/http"
	"time"

	"homecontrol/goserver/models"
	"homecontrol/goserver/services/controlsystemhome"
	"homecontrol/goserver/services/usecontrol"
)

// RequestToControlled action request
func RequestToControlled(controlled *models.Сontrolled, command *models.CommandRecord) (responseMessage string, err error) {
	if models.Test {
		return
	}
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
	// TODO: http or https ?
	if controlled.Port != "" {
		URL = "http://" + controlled.Host + ":" + controlled.Port + "/used/command"
	} else {
		URL = "http://" + controlled.Host + "/used/command"
	}
	req, err := http.NewRequest("POST", URL, buffer)
	if err != nil {
		err = errors.New(controlled.Name + ": no connection. " + err.Error())
		return
	}
	client := new(http.Client)
	client.Timeout = 3 * time.Second
	resp, err := client.Do(req)
	if err != nil {
		err = errors.New(controlled.Name + ": no connection. " + err.Error())
		return
	}
	defer resp.Body.Close()
	responseByte, err := ioutil.ReadAll(resp.Body)
	responseMessage = string(responseByte)
	if err != nil {
		return
	}
	if resp.StatusCode != 200 {
		err = errors.New(controlled.Name + " error: " + responseMessage)
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
		Command: 999,
	}

	for _, controlled := range controlleds {
		if controlled == nil || controlled.HomeControlID != "" {
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

	err = nil
	str = strStart + str
	return
}

// InMessage receives a message
func InMessage(controlledID int, msg string) (outServerMsg string, err error) {
	return usecontrol.IncomingMessageDistributor(controlledID, msg)
}
