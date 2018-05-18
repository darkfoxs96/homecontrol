package main

import (
	"github.com/astaxie/beego"

	_ "homecontrol/goserver/gosession"
	_ "homecontrol/goserver/routers"
	"homecontrol/goserver/models"
	
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
