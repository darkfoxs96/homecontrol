package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/soundparsing:Settings"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/soundparsing:Settings"],
		beego.ControllerComments{
			Method:           "Post",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"post"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/soundparsing:Settings"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/soundparsing:Settings"],
		beego.ControllerComments{
			Method:           "Get",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/soundparsing:SoundParsing"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/soundparsing:SoundParsing"],
		beego.ControllerComments{
			Method:           "Get",
			Router:           `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/soundparsing:SoundParsing"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/soundparsing:SoundParsing"],
		beego.ControllerComments{
			Method:           "GetOne",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/soundparsing:UsedID"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/soundparsing:UsedID"],
		beego.ControllerComments{
			Method:           "Post",
			Router:           `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/soundparsing:UsedID"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/soundparsing:UsedID"],
		beego.ControllerComments{
			Method:           "Get",
			Router:           `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

}
