package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/controlled:Controlled"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/controlled:Controlled"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/controlled:Controlled"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/controlled:Controlled"],
		beego.ControllerComments{
			Method: "Get",
			Router: `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/controlled:Controlled"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/controlled:Controlled"],
		beego.ControllerComments{
			Method: "Put",
			Router: `/:id`,
			AllowHTTPMethods: []string{"put"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/controlled:Controlled"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/controlled:Controlled"],
		beego.ControllerComments{
			Method: "GetOne",
			Router: `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/controlled:Controlled"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/controlled:Controlled"],
		beego.ControllerComments{
			Method: "Delete",
			Router: `/:id`,
			AllowHTTPMethods: []string{"delete"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/controlled:ControlledMessage"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/controlled:ControlledMessage"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/controlled:InfoControlled"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/controlled:InfoControlled"],
		beego.ControllerComments{
			Method: "Get",
			Router: `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

}
