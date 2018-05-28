package sessioncontrol

import (
	"errors"
	"strings"

	"golang.org/x/crypto/bcrypt"

	"github.com/darkfoxs96/gosmtp/gomail"

	"homecontrol/goserver/models"
	"homecontrol/goserver/tools"
)

// GetSMTPServersNames return all smtp-server name
func GetSMTPServersNames() []string {
	smtp := []string{}
	for key := range gomail.SMTP {
		smtp = append(smtp, key)
	}
	return smtp
}

// RecoveryPassword send email with new password
func RecoveryPassword(emailPassword string) (err error) {
	session := models.GetSession()
	err = bcrypt.CompareHashAndPassword([]byte(session.EmailPasswordHash), []byte(emailPassword))
	if err != nil {
		err = errors.New("SesionControl: emailPassword does not match msg error: " + err.Error())
		return
	}

	smtpServer := gomail.SMTP[session.EmailSMTPServer]
	if smtpServer == nil {
		err = errors.New("SesionControl: smtp server not found")
		return
	}

	newPassword := tools.RandHash(10)

	sender := gomail.NewSender(session.EmailLogin, emailPassword, smtpServer.Host, smtpServer.Port)

	receiver := []string{session.EmailLogin}
	subject := "HomeComtrol: password recovery!"
	message := "Your new password: " + newPassword
	bodyMessage := sender.WriteHTMLEmail(receiver, subject, message)

	err = sender.SendMail(receiver, subject, bodyMessage)
	if err != nil {
		return
	}

	newPasswordHash, err := bcrypt.GenerateFromPassword([]byte(newPassword), bcrypt.DefaultCost)
	if err != nil {
		err = errors.New("SesionControl: Error bcrypt.GenerateFromPassword() msg error: " + err.Error())
		return
	}
	err = models.SetPasswordHash(string(newPasswordHash))
	if err != nil {
		return
	}

	return
}

// SetEmail set login, password, smtp server for email
func SetEmail(password, emailPassword, emailLogin, smtpServer string) (err error) {
	isCheckPassword := IsCheckPassword(password)
	if !isCheckPassword {
		err = errors.New("SesionControl: Error, password does not match")
	}

	newPasswordHash, err := bcrypt.GenerateFromPassword([]byte(emailPassword), bcrypt.DefaultCost)
	if err != nil {
		err = errors.New("SesionControl: Error bcrypt.GenerateFromPassword() msg error: " + err.Error())
		return
	}

	smtp := gomail.SMTP[smtpServer]
	if smtp == nil {
		err = errors.New("SesionControl: smtp server not found")
		return
	}

	if !strings.HasSuffix(emailLogin, smtpServer) && strings.Index(emailLogin, "@") != -1 {
		err = errors.New("SesionControl: ! emaillogin@" + smtpServer + " .Wrong: " + emailLogin)
	}

	if !strings.HasSuffix(emailLogin, smtpServer) {
		emailLogin += "@" + smtpServer
	}

	emailPasswordHash := string(newPasswordHash)
	return models.SetEmail(emailPasswordHash, emailLogin, smtpServer)
}

// IsCheckPassword password to passwordHash, is check passwordHash and passwordHash in models(DB)
func IsCheckPassword(password string) (isCheckPassword bool) {
	err := bcrypt.CompareHashAndPassword([]byte(models.GetPasswordHash()), []byte(password))
	if err != nil {
		return false
	}
	return true
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
	isCheckPassword := IsCheckPassword(oldPassword)
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

// GetVersionPasswordHash get version hash
func GetVersionPasswordHash() (versionPasswordHash string) {
	return models.GetVersionPasswordHash()
}
