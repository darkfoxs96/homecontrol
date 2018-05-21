package models

import (
	"errors"
	"homecontrol/goserver/tools"
)

const (
	lengthHash = 10
)

// GetVersionPasswordHash return versionPasswordHash
func GetVersionPasswordHash() (versionPasswordHash string) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.VersionPasswordHash
}

// GetPasswordHash return passwordHash
func GetPasswordHash() (passwordHash string) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.PasswordHash
}

// SetPasswordHash set passwordHash, create and set new VersionPasswordHash
func SetPasswordHash(passwordHash string) error {
	if passwordHash == "" {
		return errors.New("Models(DB): Error passwordHash empty, not set password hash")
	}
	locker.Lock()
	defer locker.Unlock()
	mainModel.PasswordHash = passwordHash
	mainModel.VersionPasswordHash = tools.RandHash(lengthHash)
	return Save()
}
