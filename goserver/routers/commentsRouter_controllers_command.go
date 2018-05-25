package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/command:CommandRecord"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/command:CommandRecord"],
		beego.ControllerComments{
			Method: "Get",
			Router: `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/command:CommandRecord"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/command:CommandRecord"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/:command`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/command:CommandRecord"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/command:CommandRecord"],
		beego.ControllerComments{
			Method: "GetOne",
			Router: `/:command`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/command:CommandRecord"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/command:CommandRecord"],
		beego.ControllerComments{
			Method: "Delete",
			Router: `/:command`,
			AllowHTTPMethods: []string{"delete"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/command:CommandUsedSound"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/command:CommandUsedSound"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/command:CommandUsedText"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/command:CommandUsedText"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

}
