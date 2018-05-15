package routers

import (
	"github.com/astaxie/beego"
	"homecontrol/goserver/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
}
