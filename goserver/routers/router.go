package routers

import (
	"github.com/astaxie/beego"
	"homecontrol/goserver/controllers"
	"homecontrol/goserver/controllers/controlled"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/api/controlled/info", &controlled.InfoControlled{})	
	beego.Router("/api/controlled", &controlled.Controlled{})
}
