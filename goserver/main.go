package main

import (
	"github.com/astaxie/beego"

	_ "homecontrol/goserver/gosession"
	"homecontrol/goserver/models"
	_ "homecontrol/goserver/routers"
	_ "homecontrol/goserver/services/botmessenger"
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
