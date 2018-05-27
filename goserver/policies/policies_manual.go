package policies

import "github.com/astaxie/beego"

func init() {
	beego.Policy("/api/controlled/message/*", "*")
	beego.Policy("/api/controlled/info/*", "*", IsAuthorized)
	beego.Policy("/api/controlled/*", "get", IsAuthorized)
	beego.Policy("/api/controlled/*", "delete", IsAuthorized)
	beego.Policy("/api/commands/*", "*", IsAuthorized)
	beego.Policy("/api/command/*", "*", IsAuthorized)
	beego.Policy("/api/usecontrol/*", "*", IsAuthorized)
	beego.Policy("/api/user/*", "*", IsAuthorized)
}
