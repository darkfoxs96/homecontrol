package usecontrol

import (
	"io/ioutil"
	"strconv"

	"github.com/astaxie/beego"

	"homecontrol/goserver/models"
	"homecontrol/goserver/services/usecontrol"
)

type LastTime struct {
	beego.Controller
}

// Post - set last time format(int(time.Now().Unix()))
// @Title Post
// @Description set last time format(int(time.Now().Unix())) string
// @Param	lastTime	body	 int	true		"last time format(int(time.Now().Unix())) string"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *LastTime) Post() {
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

	err = usecontrol.SetLastTime(request)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true}
	o.ServeJSON()
}

// Get - get useLastTime
// @Title Get
// @Description get useLastTime format(int(time.Now().Unix())) string
// @Success 200 {object} models.Message
// @Failure 500 database error
// @router / [get]
func (o *LastTime) Get() {
	lastTime := usecontrol.GetLastTime()

	o.Data["json"] = models.Message{Status: true, Message: strconv.Itoa(lastTime)}
	o.ServeJSON()
}
