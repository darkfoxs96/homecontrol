package models

import (
	"errors"
	"time"
)

func GetReportUnauthorizedUse() bool {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.UseControl.ReportUnauthorizedUse
}

func SetReportUnauthorizedUse(reportUnauthorizedUse bool) error {
	locker.Lock()
	defer locker.Unlock()
	mainModel.UseControl.ReportUnauthorizedUse = reportUnauthorizedUse
	return Save()
}

// GetDetectedTime format millisecond
func GetDetectedTime() int {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.UseControl.DetectedTime
}

// SetDetectedTime format millisecond
func SetDetectedTime(detectedTime int) error {
	if detectedTime < 0 {
		return errors.New("Models(DB): Time can not be less than 0")
	}
	locker.Lock()
	defer locker.Unlock()
	mainModel.UseControl.DetectedTime = detectedTime
	return Save()
}

// GetUsedLastTime format millisecond
func GetUsedLastTime() int {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.UseControl.UsageLastTime
}

// SetUsedLastTime format millisecond
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

func GetUsageLog() []string {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.UseControl.UsageLog
}
