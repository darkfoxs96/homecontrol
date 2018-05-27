package controllers

import (
	"github.com/astaxie/beego"

	"homecontrol/goserver/gosession"
	"homecontrol/goserver/models"
)

type Logout struct {
	beego.Controller
}

// Get - logout
// @Title Get
// @Description logout
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [get]
func (o *Logout) Get() {
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
