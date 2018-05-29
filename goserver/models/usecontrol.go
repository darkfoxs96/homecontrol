package models

import (
	"errors"
	"time"
)

// GetReportUnauthorizedUse get ReportUnauthorizedUse
func GetReportUnauthorizedUse() bool {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.UseControl.ReportUnauthorizedUse
}

// SetReportUnauthorizedUse set ReportUnauthorizedUse
func SetReportUnauthorizedUse(reportUnauthorizedUse bool) error {
	locker.Lock()
	defer locker.Unlock()
	mainModel.UseControl.ReportUnauthorizedUse = reportUnauthorizedUse
	return Save()
}

// GetDetectedTime format second
func GetDetectedTime() int {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.UseControl.DetectedTime
}

// SetDetectedTime format second
func SetDetectedTime(detectedTime int) error {
	if detectedTime < 0 {
		return errors.New("Models(DB): Time can not be less than 0")
	}
	locker.Lock()
	defer locker.Unlock()
	mainModel.UseControl.DetectedTime = detectedTime
	return Save()
}

// GetUsedLastTime format second time.Now().Unix()
func GetUsedLastTime() int {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.UseControl.UsageLastTime
}

// SetUsedLastTime format second time.Now().Unix()
func SetUsedLastTime(usageLastTime int) error {
	if usageLastTime < 0 {
		return errors.New("Models(DB): Time can not be less than 0")
	}
	if usageLastTime < int(time.Now().Unix())-10000 && usageLastTime > int(time.Now().Unix())+10000 {
		return errors.New("Models(DB): when updating 'UsedLastTime' should be in real time")
	}
	locker.Lock()
	defer locker.Unlock()
	mainModel.UseControl.UsageLastTime = usageLastTime
	return Save()
}

// AppendUsageLog append string to usege log
func AppendUsageLog(msg string) error {
	if msg == "" {
		return errors.New("Models(DB): entry for the log, can not be empty")
	}
	locker.Lock()
	defer locker.Unlock()
	usegeLog := mainModel.UseControl.UsageLog
	if len(usegeLog) >= 100 {
		usegeLog = usegeLog[1:99]
	}
	usegeLog = append(usegeLog, msg)
	mainModel.UseControl.UsageLog = usegeLog
	return Save()
}

// GetUsageLog get usage log
func GetUsageLog() []string {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.UseControl.UsageLog
}
