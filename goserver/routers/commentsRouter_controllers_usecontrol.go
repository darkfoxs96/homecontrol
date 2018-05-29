package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:DetectedTime"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:DetectedTime"],
		beego.ControllerComments{
			Method:           "Post",
			Router:           `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:DetectedTime"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:DetectedTime"],
		beego.ControllerComments{
			Method:           "Get",
			Router:           `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:LastTime"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:LastTime"],
		beego.ControllerComments{
			Method:           "Post",
			Router:           `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:LastTime"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:LastTime"],
		beego.ControllerComments{
			Method:           "Get",
			Router:           `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:Log"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:Log"],
		beego.ControllerComments{
			Method:           "Post",
			Router:           `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:Log"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:Log"],
		beego.ControllerComments{
			Method:           "Get",
			Router:           `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:ReportUnauthorizedUse"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:ReportUnauthorizedUse"],
		beego.ControllerComments{
			Method:           "Post",
			Router:           `/`,
			AllowHTTPMethods: []string{"post"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:ReportUnauthorizedUse"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/usecontrol:ReportUnauthorizedUse"],
		beego.ControllerComments{
			Method:           "Get",
			Router:           `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

}
