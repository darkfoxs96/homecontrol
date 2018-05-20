package sessioncontrol

import (
	"errors"
	"golang.org/x/crypto/bcrypt"
	
	"homecontrol/goserver/models"
)

// IsCheckPassword password to passwordHash, is check passwordHash and passwordHash in models(DB)
func IsCheckPassword(password string) (isCheckPassword bool, err error) {
	hashPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		err = errors.New("SesionControl: Error bcrypt.GenerateFromPassword() msg error: " + err.Error())
		return
	}
	if models.GetPasswordHash() == string(hashPassword) {
		isCheckPassword = true
	} else {
		isCheckPassword = false
	}
	return
}

// IsCheckVersionHashPassword is check IsCheckVersionHashPassword and IsCheckVersionHashPassword in models(DB)
func IsCheckVersionHashPassword(versionHashPassword string) (isCheckVersionHashPassword bool) {
	if versionHashPassword == models.GetVersionPasswordHash() {
		isCheckVersionHashPassword = true
	} else {
		isCheckVersionHashPassword = false
	}
	return
}

// NewPassword create new passwordHash, save to models(DB)
func NewPassword(oldPassword, newPassword string) (err error) {
	isCheckPassword, err := IsCheckPassword(oldPassword)
	if err != nil {
		return
	}
	if !isCheckPassword {
		err = errors.New("SesionControl: Error, old password does not match")
	}
	newPasswordHash, err := bcrypt.GenerateFromPassword([]byte(newPassword), bcrypt.DefaultCost)
	if err != nil {
		err = errors.New("SesionControl: Error bcrypt.GenerateFromPassword() msg error: " + err.Error())
		return
	}
	return models.SetPasswordHash(string(newPasswordHash))
}