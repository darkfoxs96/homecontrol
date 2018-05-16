package controlled

import (
	"bytes"
	"encoding/binary"
	"io/ioutil"
	"net/http"

	"homecontrol/goserver/models"
)

// RequestToControlled action request
func RequestToControlled(controlledID int, commandID string) (responseMessage string, err error) {
	controlled := models.GetСontrolled(controlledID)
	command := models.GetCommandRecord(commandID)

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
