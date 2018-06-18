// Package routers contain API routs
// @APIVersion 1.0.0
// @Title RESTful API for HomeControl
// @Description API developed to work with AngularJS 6 application on front-end
// @Contact darkfoxs96@gmail.com
package routers

import (
	"homecontrol/goserver/controllers/tphomecontrol"

	"github.com/astaxie/beego"

	"homecontrol/goserver/controllers"
	botmessanger "homecontrol/goserver/controllers/botmessanger"
	"homecontrol/goserver/controllers/command"
	"homecontrol/goserver/controllers/commands"
	"homecontrol/goserver/controllers/controlled"
	"homecontrol/goserver/controllers/soundparsing"
	"homecontrol/goserver/controllers/usecontrol"
	"homecontrol/goserver/controllers/user"
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
			beego.NSNamespace("/controlled/buffer",
				beego.NSInclude(
					&controlled.CommonBuffer{},
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
			beego.NSNamespace("/login",
				beego.NSInclude(
					&controllers.Login{},
				),
			),
			beego.NSNamespace("/user/logout",
				beego.NSInclude(
					&controllers.Logout{},
				),
			),
			beego.NSNamespace("/user/password/recovery",
				beego.NSInclude(
					&user.RecoveryPassword{},
				),
			),
			beego.NSNamespace("/user/password/new",
				beego.NSInclude(
					&user.NewPassword{},
				),
			),
			beego.NSNamespace("/user/email",
				beego.NSInclude(
					&user.Email{},
				),
			),
			beego.NSNamespace("/user/email/smtpserver",
				beego.NSInclude(
					&user.SMTPServer{},
				),
			),
			beego.NSNamespace("/soundparsing/settings",
				beego.NSInclude(
					&soundparsing.Settings{},
				),
			),
			beego.NSNamespace("/soundparsing/used",
				beego.NSInclude(
					&soundparsing.UsedID{},
				),
			),
			beego.NSNamespace("/soundparsing",
				beego.NSInclude(
					&soundparsing.SoundParsing{},
				),
			),
			beego.NSNamespace("/botmessenger/message",
				beego.NSInclude(
					&botmessanger.Message{},
				),
			),
			beego.NSNamespace("/botmessenger/settings",
				beego.NSInclude(
					&botmessanger.Settings{},
				),
			),
			beego.NSNamespace("/botmessenger",
				beego.NSInclude(
					&botmessanger.BotMesseger{},
				),
			),
			beego.NSNamespace("/tphomecontrol/settings",
				beego.NSInclude(
					&tphomecontrol.Settings{},
				),
			),
			beego.NSNamespace("/tphomecontrol/info",
				beego.NSInclude(
					&tphomecontrol.Info{},
				),
			),
			beego.NSNamespace("/tphomecontrol/objects",
				beego.NSInclude(
					&tphomecontrol.Objects{},
				),
			),
			beego.NSNamespace("/tphomecontrol/commands",
				beego.NSInclude(
					&tphomecontrol.Commands{},
				),
			),
			beego.NSNamespace("/tphomecontrol",
				beego.NSInclude(
					&tphomecontrol.TPHomeControl{},
				),
			),
		)

	beego.AddNamespace(ns)
}
