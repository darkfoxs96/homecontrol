package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/botmessanger:BotMesseger"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/botmessanger:BotMesseger"],
		beego.ControllerComments{
			Method: "Get",
			Router: `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/botmessanger:BotMesseger"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/botmessanger:BotMesseger"],
		beego.ControllerComments{
			Method: "GetOne",
			Router: `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/botmessanger:Message"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/botmessanger:Message"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/botmessanger:Message"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/botmessanger:Message"],
		beego.ControllerComments{
			Method: "PostOne",
			Router: `/:id`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/botmessanger:Settings"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/botmessanger:Settings"],
		beego.ControllerComments{
			Method: "Post",
			Router: `/:id`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/botmessanger:Settings"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/botmessanger:Settings"],
		beego.ControllerComments{
			Method: "Get",
			Router: `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

}
