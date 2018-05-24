package policies

import (
	"homecontrol/goserver/gosession"
	"homecontrol/goserver/models"
	"homecontrol/goserver/services/sessioncontrol"

	"github.com/astaxie/beego/context"
)

// IsAuthorized Policy
func IsAuthorized(ctx *context.Context) {
	if models.Test {
		return
	}
	sess, err := gosession.GlobalSessions.SessionStart(ctx.ResponseWriter, ctx.Request)
	if err == nil {
		defer sess.SessionRelease(ctx.ResponseWriter)
	}
	isAutorized, ok := sess.Get("IsAutorized").(bool)
	if !ok {
		ctx.Output.SetStatus(401)
		_ = ctx.Output.Body([]byte(`Unauthorized`))
	}
	versionHashPassword, ok := sess.Get("VersionHashPassword").(string)
	if !ok {
		ctx.Output.SetStatus(401)
		_ = ctx.Output.Body([]byte(`Unauthorized`))
	}
	if err != nil || !isAutorized || !sessioncontrol.IsCheckVersionHashPassword(versionHashPassword) {
		ctx.Output.SetStatus(401)
		_ = ctx.Output.Body([]byte(`Unauthorized`))
	}
}
