package main

import (
	"github.com/astaxie/beego"

	_ "homecontrol/goserver/gosession"
	"homecontrol/goserver/models"
	_ "homecontrol/goserver/policies"
	_ "homecontrol/goserver/routers"
	_ "homecontrol/goserver/services/botmessenger"
	_ "homecontrol/goserver/services/controlsystemhome"
	_ "homecontrol/goserver/services/soundparsing"
	// Third-party home control:
	// Bot messeger:
	// Sound parsings:
	_ "homecontrol/goserver/soundparsing/yandex"
)

func main() {
	// swagger
	if beego.BConfig.RunMode == "dev" {
		beego.BConfig.WebConfig.DirectoryIndex = true
		beego.BConfig.WebConfig.StaticDir["/swagger"] = models.Path + "swagger"
	}

	// frontend
	if !models.Test {
		beego.SetViewsPath(models.Path + "views")
		beego.SetStaticPath("/static/", models.Path+"webhomecontrol/dist/webhomecontrol")
	}

	beego.Run()
}
