package usecontrol

import (
	"io/ioutil"
	"strings"

	"github.com/astaxie/beego"

	"homecontrol/goserver/models"
	"homecontrol/goserver/services/usecontrol"
)

type Log struct {
	beego.Controller
}

// Post - append to log
// @Title Post
// @Description append to log
// @Param	log	body	string	true		"Append to log"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *Log) Post() {
	defer o.Ctx.Request.Body.Close()

	body, err := ioutil.ReadAll(o.Ctx.Request.Body)
	if err != nil {
		o.CustomAbort(400, "Wrong read body")
	}
	o.Ctx.Request.Body.Close()

	request := string(body)
	if request == "" {
		o.CustomAbort(400, "Wrong: empty body")
	}

	err = usecontrol.AppendLog(request)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true}
	o.ServeJSON()
}

// Get - get log
// @Title Get
// @Description get log
// @Success 200 {object} models.Message
// @Failure 500 database error
// @router / [get]
func (o *Log) Get() {
	log := usecontrol.GetLog()

	o.Data["json"] = models.Message{Status: true, Message: strings.Join(log, "\n")}
	o.ServeJSON()
}
