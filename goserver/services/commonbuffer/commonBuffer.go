package commonbuffer

import (
	"homecontrol/goserver/models"
	"homecontrol/goserver/services/controlled"
	control "homecontrol/goserver/services/controlled"
)

// RequestToControlledBuffer sends a new buffer to all subscribers
func RequestToControlledBuffer() error {
	controlleds := models.GetСontrolleds()
	command := &models.CommandRecord{
		Command:       0,
		StringCommand: models.GetCommonBuffer(),
	}

	for _, controlled := range controlleds {
		if controlled.CommonBuffer != 1 {
			continue
		}
		_, err := control.RequestToControlled(controlled, command)
		if err != nil {
			return err
		}
	}

	return nil
}

// UpdateBuffer update models.CommonBuffer and sends a new buffer to all subscribers
func UpdateBuffer(ID int, buffer string) error {
	controlledBuf := controlled.GetControlled(ID)
	if controlledBuf == nil || controlledBuf.CommonBuffer == 0 {
		return nil
	}

	if buffer == models.GetCommonBuffer() {
		return nil
	}

	models.SetCommonBuffer(buffer)

	err := RequestToControlledBuffer()
	if err != nil {
		return err
	}

	return nil
}
