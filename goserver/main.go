package main

import (
	"github.com/astaxie/beego"

	"homecontrol/goserver/models"
	_ "homecontrol/goserver/gosession"	
	_ "homecontrol/goserver/routers"
	_ "homecontrol/goserver/policies"
	_ "homecontrol/goserver/services/botmessenger"
	_ "homecontrol/goserver/services/soundparsing"
	_ "homecontrol/goserver/services/controlsystemhome"
	// Third-party home control
	// Bot messeger
	// Sound parsings
	_ "homecontrol/goserver/soundparsing/yandex"	
)

func main() {
	if beego.BConfig.RunMode == "dev" {
		beego.BConfig.WebConfig.DirectoryIndex = true
		beego.BConfig.WebConfig.StaticDir["/swagger"] = "swagger"
	}

	if !models.Test {
		beego.SetViewsPath(models.Path + "views")
		beego.SetStaticPath("/static/", models.Path+"static")
	}
	beego.Run()
}
