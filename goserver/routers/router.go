package routers

import (
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
		)

	beego.AddNamespace(ns)
}
