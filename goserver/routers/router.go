package routers

import (
	"github.com/astaxie/beego"

	"homecontrol/goserver/controllers"
	"homecontrol/goserver/controllers/controlled"
	"homecontrol/goserver/controllers/usecontrol"
	"homecontrol/goserver/controllers/command"
	"homecontrol/goserver/controllers/commands"
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

			beego.NSNamespace("/usecontrol/detectedtime",
				beego.NSInclude(
					&usecontrol.DetectedTime{},
				),
			),

			beego.NSNamespace("/usecontrol/lasttime",
				beego.NSInclude(
					&usecontrol.LastTime{},
				),
			),

			beego.NSNamespace("/usecontrol/log",
				beego.NSInclude(
					&usecontrol.Log{},
				),
			),

			beego.NSNamespace("/usecontrol/reportunauthorizeduse",
				beego.NSInclude(
					&usecontrol.ReportUnauthorizedUse{},
				),
			),
		)

	beego.AddNamespace(ns)
}
