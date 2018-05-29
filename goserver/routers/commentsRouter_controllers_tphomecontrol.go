package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:Commands"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:Commands"],
		beego.ControllerComments{
			Method:           "Get",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:Info"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:Info"],
		beego.ControllerComments{
			Method:           "Get",
			Router:           `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:Info"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:Info"],
		beego.ControllerComments{
			Method:           "GetOne",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:Objects"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:Objects"],
		beego.ControllerComments{
			Method:           "Get",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:Settings"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:Settings"],
		beego.ControllerComments{
			Method:           "Post",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"post"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:Settings"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:Settings"],
		beego.ControllerComments{
			Method:           "Get",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:TPHomeControl"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:TPHomeControl"],
		beego.ControllerComments{
			Method:           "Get",
			Router:           `/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

	beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:TPHomeControl"] = append(beego.GlobalControllerRouter["homecontrol/goserver/controllers/tphomecontrol:TPHomeControl"],
		beego.ControllerComments{
			Method:           "GetOne",
			Router:           `/:id`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Params:           nil})

}
