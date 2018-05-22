package policies

import (
	"homecontrol/goserver/services/sessioncontrol"
	"homecontrol/goserver/gosession"

	"github.com/astaxie/beego/context"
)

// IsAuthorized Policy
func IsAuthorized(ctx *context.Context) {
	sess, err := gosession.GlobalSessions.SessionStart(ctx.ResponseWriter, ctx.Request)
	if err == nil {
		defer sess.SessionRelease(ctx.ResponseWriter)	
	}
	if err != nil || !sess.Get("IsAutorized").(bool) || !sessioncontrol.IsCheckVersionHashPassword(sess.Get("VersionHashPassword").(string)) {
		ctx.Output.SetStatus(401)
		_ = ctx.Output.Body([]byte(`Unauthorized`))
	}
}
