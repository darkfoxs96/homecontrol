package models

import (
	"errors"
	"homecontrol/goserver/tools"
)

const (
	lengthHash = 20
)

// GetVersionPasswordHash return versionPasswordHash
func GetVersionPasswordHash() (versionPasswordHash string) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.Session.VersionPasswordHash
}

// GetPasswordHash return passwordHash
func GetPasswordHash() (passwordHash string) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.Session.PasswordHash
}

// SetPasswordHash set passwordHash, create and set new VersionPasswordHash
func SetPasswordHash(passwordHash string) error {
	if passwordHash == "" {
		return errors.New("Models(DB): Error passwordHash empty, not set password hash")
	}
	locker.Lock()
	defer locker.Unlock()
	mainModel.Session.PasswordHash = passwordHash
	mainModel.Session.VersionPasswordHash = tools.RandHash(lengthHash)
	return Save()
}

// SetEmail set password hash, login hash, smtp server for email
func SetEmail(passwordHash, login, smtpServer string) error {
	if passwordHash == "" {
		return errors.New("Models(DB): Error passwordHash for email empty")
	}
	if login == "" {
		return errors.New("Models(DB): Error login for email empty")
	}
	if smtpServer == "" {
		return errors.New("Models(DB): Error smtpServer for email empty")
	}
	locker.Lock()
	defer locker.Unlock()
	mainModel.Session.EmailPasswordHash = passwordHash
	mainModel.Session.EmailLogin = login
	mainModel.Session.EmailSMTPServer = smtpServer
	return Save()
}

// GetSession return Session
func GetSession() (Session *Session) {
	locker.Lock()
	defer locker.Unlock()
	return mainModel.Session
}
