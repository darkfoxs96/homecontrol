package usecontrol

import (
	"errors"
	"strconv"
	"time"

	"homecontrol/goserver/models"
)

var (
	reportUnauthorizedUse bool
	// Format second
	detectedTime int
	// Format second
	lastTime int
	log      []string
)

func init() {
	reportUnauthorizedUse = GetReportUnauthorizedUse()
	detectedTime = GetDetectedTime()
	lastTime = GetLastTime()
	log = GetLog()
}

// SetReportUnauthorizedUse report unauthorized use
func SetReportUnauthorizedUse(unauthorizedUse bool) (err error) {
	err = models.SetReportUnauthorizedUse(unauthorizedUse)
	if err != nil {
		return
	}
	reportUnauthorizedUse = unauthorizedUse
	return
}

// GetReportUnauthorizedUse get settings bu unauthorized use
func GetReportUnauthorizedUse() (unauthorizedUse bool) {
	return models.GetReportUnauthorizedUse()
}

// SetDetectedTime set detected time
// format second
func SetDetectedTime(newDetectedTime int) (err error) {
	err = models.SetDetectedTime(newDetectedTime)
	if err != nil {
		return
	}
	detectedTime = newDetectedTime
	return
}

// GetDetectedTime get detected time
// format second
func GetDetectedTime() (detectedTime int) {
	return models.GetDetectedTime()
}

// GetLastTime get used last time
// format second time.Now().Unix()
func GetLastTime() (lastTime int) {
	return models.GetUsedLastTime()
}

// SetLastTime set used last time
// format second time.Now().Unix()
func SetLastTime(newLastTime int) (err error) {
	err = models.SetUsedLastTime(newLastTime)
	if err != nil {
		return
	}
	lastTime = newLastTime
	return
}

// AppendLog add a line to the log
func AppendLog(msg string) error {
	err := models.AppendUsageLog(msg)
	if err != nil {
		return err
	}
	log = append(log, msg)
	return nil
}

// GetLog return log
func GetLog() []string {
	return models.GetUsageLog()
}

// IncomingMessageDistributor distributes signals
func IncomingMessageDistributor(deviceID interface{}, msg string) (outMsg string, err error) {
	IsUnauthorizedUse := false
	if reportUnauthorizedUse && lastTime+detectedTime < int(time.Now().Unix()) {
		IsUnauthorizedUse = true
		outMsg += "UnauthorizedUse! "
	}
	SetLastTime(int(time.Now().Unix()))

	switch deviceID.(type) {
	case string:
		if IsUnauthorizedUse {
			outMsg = outMsg + time.Now().String() + ": " + deviceID.(string) + ": " + msg
			err = AppendLog(outMsg)
			if err != nil {
				return
			}
		} else {
			err = AppendLog(time.Now().String() + ": " + deviceID.(string) + ": " + msg)
			if err != nil {
				return
			}
			outMsg = "Ok"
		}
	case int:
		controlled := models.GetСontrolled(deviceID.(int))
		if controlled == nil {
			err = errors.New("UseControl: Error: unknown a controlled")
			return
		}
		if IsUnauthorizedUse {

			outMsg = outMsg + time.Now().String() + ": " + strconv.Itoa(deviceID.(int)) + " " + controlled.Name + ": " + msg
			err = AppendLog(outMsg)
			if err != nil {
				return
			}
		} else {
			err = AppendLog(time.Now().String() + ": " + strconv.Itoa(deviceID.(int)) + " " + controlled.Name + ": " + msg)
			if err != nil {
				return
			}
			outMsg = "Ok"
		}
	default:
		err = errors.New("UseControl: Error: unknown interface")
		return
	}

	if IsUnauthorizedUse {
		models.ChOutMessageToAll <- outMsg
	}

	return
}
