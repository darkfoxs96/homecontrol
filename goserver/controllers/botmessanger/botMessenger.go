package botmessenger

import (
	"homecontrol/goserver/services/botmessenger"
	"io/ioutil"

	"github.com/astaxie/beego"

	"homecontrol/goserver/models"
)

type Message struct {
	beego.Controller
}

// Post - send a message through all messengers
// @Title Post
// @Description send a message through all messengers
// @Param	message		body	string	true		"Message"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *Message) Post() {
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

	msg, err := botmessenger.OutMessage(request)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true, Message: msg}
	o.ServeJSON()
}

// PostOne - send a message
// @Title Post
// @Description send a message
// @Param	message		body	string	true		"Message"
// @Param	id			path	string	true	"The id you want the messenger message"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router /:id [post]
func (o *Message) PostOne() {
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

	ID := o.Ctx.Input.Param(":id")
	if ID == "" {
		o.CustomAbort(400, "Wrong: empty id")
	}

	botMessenger := botmessenger.BotMessengerInterfaces[ID]
	if botMessenger == nil {
		o.CustomAbort(400, "Not found bot-messenger")
	}

	msg, err := botMessenger.OutMessage(request)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true, Message: msg}
	o.ServeJSON()
}

type Settings struct {
	beego.Controller
}

// Post - set settings
// @Title Post
// @Description set settings
// @Param	body	body	 string		true	"JSON for settings"
// @Param	id		path	 string		true	"The id you want to set for settings"
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

	botMessenger := botmessenger.BotMessengerInterfaces[ID]
	if botMessenger == nil {
		o.CustomAbort(400, "Not found botMessenger")
	}

	msg, err := botMessenger.SetSettingsFromTheJSON(body)
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

	botMessenger := botmessenger.BotMessengerInterfaces[ID]
	if botMessenger == nil {
		o.CustomAbort(400, "Not found botMessenger")
	}

	settings, err := botMessenger.GetParamHTMLForInsertingSettings()
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Ctx.Output.SetStatus(200)
	o.Ctx.Output.Body([]byte(settings))
}

type BotMesseger struct {
	beego.Controller
}

// GetOne - get a fortune
// @Title Get
// @Description get a fortune
// @Param	id	path	 string		true	"The id you want to get"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router /:id [get]
func (o *BotMesseger) GetOne() {
	ID := o.Ctx.Input.Param(":id")
	if ID == "" {
		o.CustomAbort(400, "Wrong: empty id")
	}

	botMessenger := botmessenger.BotMessengerInterfaces[ID]
	if botMessenger == nil {
		o.CustomAbort(400, "Not found botMessenger")
	}

	msg, active := botMessenger.IsSupporting()

	o.Data["json"] = models.Message{Status: true, Message: msg, BoolMessage: active}
	o.ServeJSON()
}

// Get - get a fortune all bot-messegers
// @Title Get
// @Description get a fortune all bot-messegers
// @Success 200 {object} []botmessenger.ListMessengers
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [get]
func (o *BotMesseger) Get() {
	activeList := botmessenger.GetListMessengers()
	o.Data["json"] = activeList
	o.ServeJSON()
}
