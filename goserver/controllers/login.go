package controllers

import (
	"encoding/json"
	"io/ioutil"
	"strconv"
	"time"

	"github.com/astaxie/beego"

	"homecontrol/goserver/gosession"
	"homecontrol/goserver/models"
	"homecontrol/goserver/services/sessioncontrol"
)

type Login struct {
	beego.Controller
}

type LoginJSON struct {
	Password string `json:"password"`
}

// Post - login
// @Title Post
// @Description login
// @Param	body	body	controllers.LoginJSON	true		"User"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *Login) Post() {
	if models.StopServer {
		end := models.TimeEndStopServer - int(time.Now().Unix())
		if end < 0 {
			models.StopServer = false
			models.TimeEndStopServer = 0
			models.CountBadConnect = 0
		} else {
			o.CustomAbort(401, "Server close. Will be opened through: "+strconv.Itoa(end)+" seconds")
		}
	}
	defer o.Ctx.Request.Body.Close()

	body, err := ioutil.ReadAll(o.Ctx.Request.Body)
	if err != nil {
		o.CustomAbort(400, "Wrong read body")
	}
	o.Ctx.Request.Body.Close()

	request := &LoginJSON{}
	err = json.Unmarshal(body, request)
	if err != nil {
		o.CustomAbort(400, "Can't unmarshal request")
	}

	check := sessioncontrol.IsCheckPassword(request.Password)
	if !check {
		models.CountBadConnect++
		if models.CountBadConnect > 19 {
			models.StopServer = true
			models.TimeEndStopServer += int(time.Now().Unix()) + 30 // second
		}
		o.CustomAbort(401, "Unauthorized2")
	}

	sess, err := gosession.GlobalSessions.SessionStart(o.Ctx.ResponseWriter, o.Ctx.Request)
	if err == nil {
		defer sess.SessionRelease(o.Ctx.ResponseWriter)
	}

	err = sess.Set("IsAutorized", true)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}
	err = sess.Set("VersionHashPassword", sessioncontrol.GetVersionPasswordHash())
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true}
	o.ServeJSON()
}
