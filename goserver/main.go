package main

import (
	"github.com/astaxie/beego"

	_ "homecontrol/goserver/gosession"
	"homecontrol/goserver/models"
	_ "homecontrol/goserver/routers"
)

func main() {
	if !models.Test {
		beego.SetViewsPath(models.Path + "views")
		beego.SetStaticPath("/static/", models.Path+"static")
	}
	beego.Run()
}
