package command

import (
	"encoding/json"
	"fmt"
	"io/ioutil"

	"homecontrol/goserver/models"
	"homecontrol/goserver/services/commandrecord"

	"github.com/astaxie/beego"
)

type CommandUsedSound struct {
	beego.Controller
}

const maxSize = 1048576 // 1 Mb

// Post - use sound command
// @Title Post
// @Description use sound command
// @Param	soundFile	formData	file	true	"sound file"
// @Param	buffer		formData	string	false	"buffer"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *CommandUsedSound) Post() {
	o.Ctx.Request.ParseMultipartForm(maxSize)

	file, _, err := o.Ctx.Request.FormFile("soundFile")
	defer file.Close()
	if err != nil {
		o.CustomAbort(400, "Wrong read soundFile")
	}

	bufSound, err := ioutil.ReadAll(file)
	if err != nil {
		o.CustomAbort(400, "Can't get sound file")
	}
	file.Close()

	var buffer string
	if o.Ctx.Request.MultipartForm.Value["buffer"] != nil {
		buffer = o.Ctx.Request.MultipartForm.Value["buffer"][0]
	}
	fmt.Println(buffer)

	msg, err := commandrecord.UsedSoundCommand(bufSound, buffer)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true, Message: msg}
	o.ServeJSON()
}

type CommandUsedText struct {
	beego.Controller
}

type UsedText struct {
	Command string `json:"command"`
	Buffer  string `json:"buffer"`
}

// Post - use text command
// @Title Post
// @Description use text command
// @Param	body		body	command.UsedText	true		"The object content."
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *CommandUsedText) Post() {
	defer o.Ctx.Request.Body.Close()

	body, err := ioutil.ReadAll(o.Ctx.Request.Body)
	if err != nil {
		o.CustomAbort(400, "Wrong read body")
	}
	o.Ctx.Request.Body.Close()

	request := &UsedText{}
	err = json.Unmarshal(body, request)
	if err != nil {
		o.CustomAbort(400, "Can't unmarshal request")
	}

	msg, err := commandrecord.UsedTextCommand(request.Command, request.Buffer)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true, Message: msg}
	o.ServeJSON()
}
