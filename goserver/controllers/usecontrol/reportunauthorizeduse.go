package usecontrol

import (
	"io/ioutil"
	"strconv"

	"github.com/astaxie/beego"

	"homecontrol/goserver/models"
	"homecontrol/goserver/services/usecontrol"
)

type ReportUnauthorizedUse struct {
	beego.Controller
}

// Post - set report unauthorized use
// @Title Post
// @Description set report unauthorized use (bool to string)
// @Param	reportUnauthorizedUse	body	bool	true		"The object content. (bool to string)"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *ReportUnauthorizedUse) Post() {
	defer o.Ctx.Request.Body.Close()

	body, err := ioutil.ReadAll(o.Ctx.Request.Body)
	if err != nil {
		o.CustomAbort(400, "Wrong read body")
	}
	o.Ctx.Request.Body.Close()

	request := string(body)
	if request == "" {
		o.CustomAbort(400, "Wrong: empty field 'ReportUnauthorizedUse'")
	}

	reportUnauthorizedUse, err := strconv.ParseBool(request)
	if err != nil {
		o.CustomAbort(400, "Wrong field 'ReportUnauthorizedUse' boolean")
	}

	err = usecontrol.SetReportUnauthorizedUse(reportUnauthorizedUse)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true}
	o.ServeJSON()
}

// Get - get field 'ReportUnauthorizedUse'
// @Title Get
// @Description get field 'ReportUnauthorizedUse' in 'bool_message'
// @Success 200 	{object} models.Message
// @Failure 500 database error
// @router / [get]
func (o *ReportUnauthorizedUse) Get() {
	reportUnauthorizedUse := usecontrol.GetReportUnauthorizedUse()

	o.Data["json"] = models.Message{Status: true, BoolMessage: reportUnauthorizedUse}
	o.ServeJSON()
}
