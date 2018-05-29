package tphomecontrol

import (
	"io/ioutil"

	"github.com/astaxie/beego"

	"homecontrol/goserver/models"
	"homecontrol/goserver/services/controlsystemhome"
)

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

	controlSystemHome := controlsystemhome.ControlSystemHomeInterfaces[ID]
	if controlSystemHome == nil {
		o.CustomAbort(400, "Not found controlSystemHome")
	}

	msg, err := controlSystemHome.SetSettingsFromTheJSON(body)
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
// @Success 200 [][]string	"JSON"
// @Failure 400 wrong body data
// @Failure 500 database error
// @router /:id [get]
func (o *Settings) Get() {
	ID := o.Ctx.Input.Param(":id")
	if ID == "" {
		o.CustomAbort(400, "Wrong: empty id")
	}

	controlSystemHome := controlsystemhome.ControlSystemHomeInterfaces[ID]
	if controlSystemHome == nil {
		o.CustomAbort(400, "Not found controlSystemHome")
	}

	settings, err := controlSystemHome.GetParamHTMLForInsertingSettings()
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Ctx.Output.SetStatus(200)
	o.Ctx.Output.Body([]byte(settings))
}

type TPHomeControl struct {
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
func (o *TPHomeControl) GetOne() {
	ID := o.Ctx.Input.Param(":id")
	if ID == "" {
		o.CustomAbort(400, "Wrong: empty id")
	}

	controlSystemHome := controlsystemhome.ControlSystemHomeInterfaces[ID]
	if controlSystemHome == nil {
		o.CustomAbort(400, "Not found controlSystemHome")
	}

	msg, active := controlSystemHome.IsSupporting()

	o.Data["json"] = models.Message{Status: true, Message: msg, BoolMessage: active}
	o.ServeJSON()
}

// Get - get a fortune all ControlSystemHome
// @Title Get
// @Description get a fortune all ControlSystemHome
// @Success 200 {object} []controlsystemhome.ListControlSystemHome
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [get]
func (o *TPHomeControl) Get() {
	activeList := controlsystemhome.GetListControlSystemHome()
	o.Data["json"] = activeList
	o.ServeJSON()
}

type Commands struct {
	beego.Controller
}

// Get - get commands
// @Title Get
// @Description get commands
// @Param	id	path	string		true	"The id you want to get"
// @Success 200 models.ListCommands
// @Failure 400 wrong body data
// @Failure 500 database error
// @router /:id [get]
func (o *Commands) Get() {
	ID := o.Ctx.Input.Param(":id")
	if ID == "" {
		o.CustomAbort(400, "Wrong: empty id")
	}

	controlSystemHome := controlsystemhome.ControlSystemHomeInterfaces[ID]
	if controlSystemHome == nil {
		o.CustomAbort(400, "Not found controlSystemHome")
	}

	list, err := controlSystemHome.GetListCommands()
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = list
	o.ServeJSON()
}

type Objects struct {
	beego.Controller
}

// Get - get objects
// @Title Get
// @Description get objects
// @Param	id	path	string		true	"The id you want to get"
// @Success 200 [][]string	"JSON"
// @Failure 400 wrong body data
// @Failure 500 database error
// @router /:id [get]
func (o *Objects) Get() {
	ID := o.Ctx.Input.Param(":id")
	if ID == "" {
		o.CustomAbort(400, "Wrong: empty id")
	}

	controlSystemHome := controlsystemhome.ControlSystemHomeInterfaces[ID]
	if controlSystemHome == nil {
		o.CustomAbort(400, "Not found controlSystemHome")
	}

	JSON, err := controlSystemHome.GetListObjectsJSON()
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Ctx.Output.SetStatus(200)
	o.Ctx.Output.Body([]byte(JSON))
}

type Info struct {
	beego.Controller
}

// GetOne - get info
// @Title Get
// @Description get info
// @Param	id		path	string		true	"The id you want to get"
// @Param	type	query	string		true	"json or string"
// @Success 200 string	"JSON or String"
// @Failure 400 wrong body data
// @Failure 500 database error
// @router /:id [get]
func (o *Info) GetOne() {
	ID := o.Ctx.Input.Param(":id")
	if ID == "" {
		o.CustomAbort(400, "Wrong: empty id")
	}

	typeInfo := o.Ctx.Request.URL.Query().Get("type")

	controlSystemHome := controlsystemhome.ControlSystemHomeInterfaces[ID]
	if controlSystemHome == nil {
		o.CustomAbort(400, "Not found controlSystemHome")
	}

	var info string
	var err error
	switch typeInfo {
	case "json":
		info, err = controlSystemHome.GetInfoJSON()
	case "string":
		info, err = controlSystemHome.GetInfoString()
	default:
		o.CustomAbort(400, "Wrong type info")
	}
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Ctx.Output.SetStatus(200)
	o.Ctx.Output.Body([]byte(info))
}

// Get - get info all interface
// @Title Get
// @Description get info all interface
// @Success 200 string
// @Failure 500 database error
// @router / [get]
func (o *Info) Get() {
	info, err := controlsystemhome.GetInfoControlSystemHomeInterfaces()
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Ctx.Output.SetStatus(200)
	o.Ctx.Output.Body([]byte(info))
}
