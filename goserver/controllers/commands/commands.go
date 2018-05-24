package commands

import (
	"github.com/astaxie/beego"

	"homecontrol/goserver/services/commands"
)

type Commands struct {
	beego.Controller
}

// Get - returns all commands
// @Title Get
// @Description get commands
// @Success 200 {object}	[]models.ListCommands
// @Failure 500 database error
// @router / [get]
func (o *Commands) Get() {
	commandsList := commands.GetAllListsCommands()

	o.Data["json"] = commandsList
	o.ServeJSON()
}
