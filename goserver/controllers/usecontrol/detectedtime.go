package usecontrol

import (
	"io/ioutil"
	"strconv"

	"github.com/astaxie/beego"

	"homecontrol/goserver/models"
	"homecontrol/goserver/services/usecontrol"
)

type DetectedTime struct {
	beego.Controller
}

// Post - set detected time format(second)
// @Title Post
// @Description set detected time format(second) string
// @Param	detectedTime	body	 int	true		"detected time format(second) string"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *DetectedTime) Post() {
	defer o.Ctx.Request.Body.Close()

	body, err := ioutil.ReadAll(o.Ctx.Request.Body)
	if err != nil {
		o.CustomAbort(400, "Wrong read body")
	}
	o.Ctx.Request.Body.Close()

	request, err := strconv.Atoi(string(body))
	if err != nil {
		o.CustomAbort(400, "Wrong: no int")
	}

	err = usecontrol.SetDetectedTime(request)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true}
	o.ServeJSON()
}

// Get - get detected time format(second)
// @Title Get
// @Description get detected time format(second) in 'int_message'
// @Success 200 {object} models.Message
// @Failure 500 database error
// @router / [get]
func (o *DetectedTime) Get() {
	detectedTime := usecontrol.GetDetectedTime()

	o.Data["json"] = models.Message{Status: true, IntMessage: detectedTime}
	o.ServeJSON()
}
