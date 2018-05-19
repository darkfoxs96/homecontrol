package main

import (
	"github.com/astaxie/beego"

	"homecontrol/goserver/models"
	_ "homecontrol/goserver/services/botmessenger"			
	_ "homecontrol/goserver/gosession"
	_ "homecontrol/goserver/routers"
	// Third-party home control
	// Bot messeger
)

func main() {
	if !models.Test {
		beego.SetViewsPath(models.Path + "views")
		beego.SetStaticPath("/static/", models.Path+"static")
	}
	beego.Run()
}
