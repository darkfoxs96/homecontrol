package main

import (
	"github.com/astaxie/beego"

	"homecontrol/goserver/models"
	_ "homecontrol/goserver/routers"
	_ "homecontrol/goserver/gosession"
)

func main() {
	if !models.Test {
		beego.SetViewsPath(models.Path + "views")
		beego.SetStaticPath("/static/", models.Path+"static")
	}
	beego.Run()
}