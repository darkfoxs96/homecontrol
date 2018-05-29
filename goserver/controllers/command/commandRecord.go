package command

import (
	"encoding/json"
	"io/ioutil"
	"strings"

	"github.com/astaxie/beego"

	"homecontrol/goserver/models"
	"homecontrol/goserver/services/commandrecord"
)

type CommandRecord struct {
	beego.Controller
}

// Post - create and update command record
// @Title Post
// @Description create and update command record
// @Param	body		body	models.CommandRecord	true		"The object content. Field NumberOfWords not required. TypeRecord: 1 - Сontrolled, 2 - Command"
// @Param	command		path	string					true		"The command you want to write. '_' will be replaced by ' '"
// @Success 200 {object} models.Message
// @Failure 400 wrong body data
// @Failure 500 database error
// @router /:command [post]
func (o *CommandRecord) Post() {
	defer o.Ctx.Request.Body.Close()

	body, err := ioutil.ReadAll(o.Ctx.Request.Body)
	if err != nil {
		o.CustomAbort(400, "Wrong read body")
	}
	o.Ctx.Request.Body.Close()

	request := &models.CommandRecord{}
	err = json.Unmarshal(body, request)
	if err != nil {
		o.CustomAbort(400, "Can't unmarshal request")
	}

	commandID := o.Ctx.Input.Param(":command")
	if commandID == "" {
		o.CustomAbort(400, "Wrong command")
	}

	commandID = strings.Replace(commandID, "_", " ", -1)

	record := &commandrecord.Record{
		ID:            commandID,
		TypeRecord:    request.TypeRecord,
		Command:       request.Command,
		StringCommand: request.StringCommand,
		СontrolledID:  request.СontrolledID,
	}

	err = commandrecord.AddOrUpdateCommand(record)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true}
	o.ServeJSON()
}

// GetOne - return favorite command record
// @Title Get
// @Description get favorite command record
// @Param	command	path	string		true	"The command record you want to receive"
// @Success 200 	{object}	models.CommandRecord
// @Failure 500 database error
// @router /:command [get]
func (o *CommandRecord) GetOne() {
	commandID := o.Ctx.Input.Param(":command")
	if commandID == "" {
		o.CustomAbort(400, "Wrong command")
	}

	commandRecord := commandrecord.GetCommandRecord(commandID)

	o.Data["json"] = commandRecord
	o.ServeJSON()
}

type Command struct {
	ID            string `json:"id"`
	TypeRecord    int    `json:"type_record"`
	Command       int    `json:"command"`
	StringCommand string `json:"string_command"`
	NumberOfWords int    `json:"number_of_words"`
	СontrolledID  int    `json:"controlled_id"`
}

// Get - return favorite command records
// @Title Get
// @Description get favorite command records
// @Success 200 	{object}	[]command.Command
// @Failure 500 database error
// @router / [get]
func (o *CommandRecord) Get() {
	mapCommandRecords := commandrecord.GetCommandRecords()
	var commands []*Command
	for key, val := range mapCommandRecords {
		if val == nil {
			continue
		}
		commands = append(commands, &Command{
			ID:            key,
			TypeRecord:    val.TypeRecord,
			Command:       val.Command,
			StringCommand: val.StringCommand,
			NumberOfWords: val.NumberOfWords,
			СontrolledID:  val.СontrolledID,
		})
	}

	o.Data["json"] = commands
	o.ServeJSON()
}

// Delete - delete a favorite command record
// @Title Delete
// @Description delete a favorite command record
// @Param	command	path	string		true	"The command you want to delete"
// @Success 200 {object} models.Message
// @Failure 400 command is empty
// @Failure 500 database error
// @router /:command [delete]
func (o *CommandRecord) Delete() {
	commandID := o.Ctx.Input.Param(":command")
	if commandID == "" {
		o.CustomAbort(400, "Wrong command")
	}

	err := commandrecord.DeleteCommandRecord(commandID)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = models.Message{Status: true}
	o.ServeJSON()
}
