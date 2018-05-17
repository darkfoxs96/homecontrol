package gosession

import (
	"encoding/json"
	"fmt"

	"github.com/astaxie/beego/session"
)

var (
	GlobalSessions *session.Manager
	conf           = &session.ManagerConfig{}
)

func init() {
	config := `{"cookieName":"gosessionid", "gclifetime":3600, "enableSetCookie":true, "providerConfig":"./redis"}`
	err := json.Unmarshal([]byte(config), conf)
	if err != nil {
		fmt.Println("INIT GOSESSION ERROR: json decode error ", err)
	}
	GlobalSessions, err = session.NewManager("file", conf)
	if err != nil {
		fmt.Println("INIT GOSESSION ERROR:", err)
	}
	go GlobalSessions.GC()
}
