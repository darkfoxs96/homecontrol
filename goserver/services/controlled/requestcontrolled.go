package controlled

import (
	"bytes"
	"encoding/binary"
	"io/ioutil"
	"net/http"

	"homecontrol/goserver/models"
)

// RequestToControlled action request
func RequestToControlled(controlled *models.Сontrolled, command *models.CommandRecord) (responseMessage string, err error) {
	buffer := bytes.NewBuffer(nil)
	err = binary.Write(buffer, binary.LittleEndian, int32(command.Command))
	if err != nil {
		return
	}
	buffer.Write([]byte(command.StringCommand))

	URL := "http://" + controlled.Host + ":" + controlled.Port
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
func RegistrationAndUpdateControlled(controlledID int, host, port, name string, commonBuffer int) (controlledAddID int, err error) {
	controlled := models.Сontrolled{
		Host:         host,
		Port:         port,
		Name:         name,
		CommonBuffer: commonBuffer,
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
