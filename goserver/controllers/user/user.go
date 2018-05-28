package user

import (
	"strconv"
	"time"
	"encoding/json"
	"io/ioutil"

	"github.com/astaxie/beego"

	"homecontrol/goserver/gosession"
	"homecontrol/goserver/models"
	"homecontrol/goserver/services/sessioncontrol"
)

type RecoveryPassword struct {
	beego.Controller
}

type Recovery struct {
	Password string `json:"password"`
}

// Post - recovery password
// @Title Post
// @Description recovery password
// @Param	body	body	user.Recovery	true		"password email"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *RecoveryPassword) Post() {
	if models.StopServer {
		end := models.TimeEndStopServer - int(time.Now().Unix())
		if end < 0 {
			models.StopServer = false
			models.TimeEndStopServer = 0
			models.CountBadConnect = 0
		} else {
			o.CustomAbort(401, "Server close. Will be opened through: " + strconv.Itoa(end) + " seconds")
		}
	}
	defer o.Ctx.Request.Body.Close()

	body, err := ioutil.ReadAll(o.Ctx.Request.Body)
	if err != nil {
		o.CustomAbort(400, "Wrong read body")
	}
	o.Ctx.Request.Body.Close()

	request := &Recovery{}
	err = json.Unmarshal(body, request)
	if err != nil {
		o.CustomAbort(400, "Can't unmarshal request")
	}

	err = sessioncontrol.RecoveryPassword(request.Password)
	if err != nil {
		models.CountBadConnect++
		if models.CountBadConnect > 2 {
			models.StopServer = true
			models.TimeEndStopServer += int(time.Now().Unix()) + 30 // second
		}
		o.CustomAbort(500, err.Error())
	}

	sess, err := gosession.GlobalSessions.SessionStart(o.Ctx.ResponseWriter, o.Ctx.Request)
	if err == nil {
		defer sess.SessionRelease(o.Ctx.ResponseWriter)
	}

	err = sess.Set("IsAutorized", false)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}
	err = sess.Set("VersionHashPassword", "")
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true}
	o.ServeJSON()
}

type Email struct {
	beego.Controller
}

type SetEmail struct {
	Password      string `json:"password"`
	LoginEmail    string `json:"login_email"`
	PasswordEmail string `json:"password_email"`
	SMTPServer    string `json:"smtp_server"`
}

// Post - set email
// @Title Post
// @Description set email
// @Param	body	body	user.SetEmail	true		"settings email"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *Email) Post() {
	defer o.Ctx.Request.Body.Close()

	body, err := ioutil.ReadAll(o.Ctx.Request.Body)
	if err != nil {
		o.CustomAbort(400, "Wrong read body")
	}
	o.Ctx.Request.Body.Close()

	request := &SetEmail{}
	err = json.Unmarshal(body, request)
	if err != nil {
		o.CustomAbort(400, "Can't unmarshal request")
	}

	err = sessioncontrol.SetEmail(request.Password, request.PasswordEmail, request.LoginEmail, request.SMTPServer)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true}
	o.ServeJSON()
}

type SMTPServer struct {
	beego.Controller
}

// Get - get all smtp server names
// @Title Get
// @Description get all smtp server names
// @Success 200 {object} []string "smtp server names"
// @router / [get]
func (o *SMTPServer) Get() {
	o.Data["json"] = sessioncontrol.GetSMTPServersNames()
	o.ServeJSON()
}

type NewPassword struct {
	beego.Controller
}

type NewPasswordClient struct {
	OldPassword string `json:"old_password"`
	NewPassword string `json:"new_password"`
}

// Post - new password
// @Title Post
// @Description create new password
// @Param	body	body	user.NewPasswordClient	true	"old password and new password"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *NewPassword) Post() {
	defer o.Ctx.Request.Body.Close()

	body, err := ioutil.ReadAll(o.Ctx.Request.Body)
	if err != nil {
		o.CustomAbort(400, "Wrong read body")
	}
	o.Ctx.Request.Body.Close()

	request := &NewPasswordClient{}
	err = json.Unmarshal(body, request)
	if err != nil {
		o.CustomAbort(400, "Can't unmarshal request")
	}

	err = sessioncontrol.NewPassword(request.OldPassword, request.NewPassword)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	sess, err := gosession.GlobalSessions.SessionStart(o.Ctx.ResponseWriter, o.Ctx.Request)
	if err == nil {
		defer sess.SessionRelease(o.Ctx.ResponseWriter)
	}

	err = sess.Set("VersionHashPassword", sessioncontrol.GetVersionPasswordHash())
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true}
	o.ServeJSON()
}
