package routers

import (
	"homecontrol/goserver/controllers/command"
	"homecontrol/goserver/controllers/commands"

	"github.com/astaxie/beego"

	"homecontrol/goserver/controllers"
	"homecontrol/goserver/controllers/controlled"
)

func init() {
	beego.Router("/", &controllers.MainController{})

	ns :=
		beego.NewNamespace("/api",
			beego.NSNamespace("/controlled/info",
				beego.NSInclude(
					&controlled.InfoControlled{},
				),
			),

			beego.NSNamespace("/controlled/message",
				beego.NSInclude(
					&controlled.ControlledMessage{},
				),
			),

			beego.NSNamespace("/controlled",
				beego.NSInclude(
					&controlled.Controlled{},
				),
			),

			beego.NSNamespace("/commands",
				beego.NSInclude(
					&commands.Commands{},
				),
			),

			beego.NSNamespace("/command/used/sound",
				beego.NSInclude(
					&command.CommandUsedSound{},
				),
			),

			beego.NSNamespace("/command/used/text",
				beego.NSInclude(
					&command.CommandUsedText{},
				),
			),

			beego.NSNamespace("/command/record",
				beego.NSInclude(
					&command.CommandRecord{},
				),
			),
		)

	beego.AddNamespace(ns)
}
