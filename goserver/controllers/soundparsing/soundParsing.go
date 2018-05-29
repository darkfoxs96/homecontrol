package soundparsing

import (
	"io/ioutil"

	"github.com/astaxie/beego"

	"homecontrol/goserver/models"
	"homecontrol/goserver/services/soundparsing"
)

type UsedID struct {
	beego.Controller
}

// Post - set used id
// @Title Post
// @Description set used id
// @Param	usedID	body	 string		true	"Used id for sound parsing"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *UsedID) Post() {
	defer o.Ctx.Request.Body.Close()

	body, err := ioutil.ReadAll(o.Ctx.Request.Body)
	if err != nil {
		o.CustomAbort(400, "Wrong read body")
	}
	o.Ctx.Request.Body.Close()

	request := string(body)
	if request == "" {
		o.CustomAbort(400, "Wrong: empty usedID")
	}

	err = soundparsing.SetUsedSoundParsingID(request)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true}
	o.ServeJSON()
}

// Get - get used id
// @Title Get
// @Description get used id
// @Success 200 {object} models.Message
// @router / [get]
func (o *UsedID) Get() {
	o.Data["json"] = models.Message{Status: true, Message: soundparsing.GetUsedSoundParsingID()}
	o.ServeJSON()
}

type Settings struct {
	beego.Controller
}

// Post - set settings
// @Title Post
// @Description set settings
// @Param	body	body	 string		true	"JSON for settings"
// @Param	id	path	string		true	"The id you want to set for settings"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router /:id [post]
func (o *Settings) Post() {
	defer o.Ctx.Request.Body.Close()

	body, err := ioutil.ReadAll(o.Ctx.Request.Body)
	if err != nil {
		o.CustomAbort(400, "Wrong read body")
	}
	o.Ctx.Request.Body.Close()

	if len(body) == 0 {
		o.CustomAbort(400, "Wrong: empty body")
	}

	ID := o.Ctx.Input.Param(":id")
	if ID == "" {
		o.CustomAbort(400, "Wrong: empty id")
	}

	soundParsing := soundparsing.SoundParsingInterfaces[ID]
	if soundParsing == nil {
		o.CustomAbort(400, "Not found soundparsing")
	}

	msg, err := soundParsing.SetSettingsFromTheJSON(body)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true, Message: msg}
	o.ServeJSON()
}

// Get - get settings
// @Title Get
// @Description get settings
// @Param	id	path	string		true	"The id you want to get"
// @Success 200 [][]string
// @Failure 400 wrong body data
// @Failure 500 database error
// @router /:id [get]
func (o *Settings) Get() {
	ID := o.Ctx.Input.Param(":id")
	if ID == "" {
		o.CustomAbort(400, "Wrong: empty id")
	}

	soundParsing := soundparsing.SoundParsingInterfaces[ID]
	if soundParsing == nil {
		o.CustomAbort(400, "Not found soundparsing")
	}

	settings, err := soundParsing.GetParamHTMLForInsertingSettings()
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Ctx.Output.SetStatus(200)
	o.Ctx.Output.Body([]byte(settings))
}

type SoundParsing struct {
	beego.Controller
}

// GetOne - get a fortune
// @Title Get
// @Description get a fortune
// @Param	id	path	string		true	"The id you want to get"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router /:id [get]
func (o *SoundParsing) GetOne() {
	ID := o.Ctx.Input.Param(":id")
	if ID == "" {
		o.CustomAbort(400, "Wrong: empty id")
	}

	soundParsing := soundparsing.SoundParsingInterfaces[ID]
	if soundParsing == nil {
		o.CustomAbort(400, "Not found soundparsing")
	}

	msg, active := soundParsing.IsSupporting()

	o.Data["json"] = models.Message{Status: true, Message: msg, BoolMessage: active}
	o.ServeJSON()
}

// Get - get a fortune all soundparsings
// @Title Get
// @Description get a fortune all soundparsings
// @Success 200 {object} []soundparsing.ListSoundParsings
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [get]
func (o *SoundParsing) Get() {
	activeList := soundparsing.GetListSoundParsing()
	o.Data["json"] = activeList
	o.ServeJSON()
}
