package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/user:Email"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/user:Email"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/user:NewPassword"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/user:NewPassword"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/user:RecoveryPassword"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/user:RecoveryPassword"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/user:SMTPServer"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/user:SMTPServer"],
		beego.ControllerComments{
			Method: "Get",
			Router: `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

}
