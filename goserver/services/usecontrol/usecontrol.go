package usecontrol

import (
	"time"
	"homecontrol/goserver/models"
)

var (
	reportUnauthorizedUse bool
	// Format second
	detectedTime int
	// Format second	
	lastTime int
	log []string
)

func init() {
	reportUnauthorizedUse = GetReportUnauthorizedUse()
	detectedTime = GetDetectedTime()
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
// format millisecond
func SetDetectedTime(newDetectedTime int) (err error) {
	err = models.SetDetectedTime(newDetectedTime)
	if err != nil {
		return
	}
	detectedTime = newDetectedTime
	return
}

// GetDetectedTime get detected time
// format millisecond
func GetDetectedTime() (detectedTime int) {
	return models.GetDetectedTime()
}

// TODO: GO code
// GetDetectedTime get detected time
// format millisecond
func GetLastTime() (detectedTime int) {
	return models.GetDetectedTime()
}

// TODO: GO code
// SetDetectedTime set detected time
// format millisecond
func SetLastTime(newDetectedTime int) (err error) {
	err = models.SetDetectedTime(newDetectedTime)
	if err != nil {
		return
	}
	detectedTime = newDetectedTime
	return
}

// AppendLog add a line to the log
func AppendLog(msg string) error {
	return models.AppendUsageLog(msg)
}

// GetLog return log
func GetLog() []string {
	return models.GetUsageLog()
}

// TODO: GO code
// IncomingMessageDistributor distributes signals
func IncomingMessageDistributor(deviceID interface{}, msg string) (outMsg string, err error) {
	// flagUnauthorizedUse := false
	if reportUnauthorizedUse && lastTime + detectedTime < int(time.Now().Unix()) {
		// flagUnauthorizedUse = true

	}


	switch deviceID.(type) {
	case string:
		err = AppendLog(deviceID.(string) + ": " + msg)
		if err != nil {
			return
		}
		outMsg = "Ok"
	case int:

	default:

	}
	return
}




