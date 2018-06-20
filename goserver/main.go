package main

import (
	"fmt"
	"io/ioutil"
	"net"

	"github.com/astaxie/beego"

	_ "homecontrol/goserver/gosession"
	"homecontrol/goserver/models"
	_ "homecontrol/goserver/policies"
	_ "homecontrol/goserver/routers"
	_ "homecontrol/goserver/services/botmessenger"
	_ "homecontrol/goserver/services/controlsystemhome"
	_ "homecontrol/goserver/services/soundparsing"
	// Third-party home control:
	// Bot messeger:
	// Sound parsings:
	_ "homecontrol/goserver/soundparsing/yandex"
)

func main() {
	iPAdressPrintLn()

	// swagger
	if beego.BConfig.RunMode == "dev" {
		beego.BConfig.WebConfig.DirectoryIndex = true
		beego.BConfig.WebConfig.StaticDir["/swagger"] = models.Path + "swagger"
	}

	// frontend
	if !models.Test {
		beego.SetViewsPath(models.Path + "webhomecontrol/dist/webhomecontrol")
		settingsStatic()
	}

	beego.Run()
}

func settingsStatic() {
	files, _ := ioutil.ReadDir(models.Path + "webhomecontrol/dist/webhomecontrol")
	for _, f := range files {
		beego.SetStaticPath("/"+f.Name(), models.Path+"webhomecontrol/dist/webhomecontrol/"+f.Name())
	}
	files, _ = ioutil.ReadDir(models.Path + "webhomecontrol/dist/webhomecontrol/assets/script")
	for _, f := range files {
		beego.SetStaticPath("/assets/script/"+f.Name(), models.Path+"webhomecontrol/dist/webhomecontrol/assets/script/"+f.Name())
	}
	files, _ = ioutil.ReadDir(models.Path + "webhomecontrol/dist/webhomecontrol/assets/sound")
	for _, f := range files {
		beego.SetStaticPath("/assets/sound/"+f.Name(), models.Path+"webhomecontrol/dist/webhomecontrol/assets/sound/"+f.Name())
	}
	files, _ = ioutil.ReadDir(models.Path + "webhomecontrol/dist/webhomecontrol/assets/style")
	for _, f := range files {
		beego.SetStaticPath("/assets/style/"+f.Name(), models.Path+"webhomecontrol/dist/webhomecontrol/assets/style/"+f.Name())
	}
	files, _ = ioutil.ReadDir(models.Path + "webhomecontrol/dist/webhomecontrol/assets/fonts")
	for _, f := range files {
		beego.SetStaticPath("/assets/fonts/"+f.Name(), models.Path+"webhomecontrol/dist/webhomecontrol/assets/fonts/"+f.Name())
	}
}

func iPAdressPrintLn() {
	addrs, err := net.InterfaceAddrs()
	if err != nil {
		fmt.Println("Oops: " + err.Error() + "\n")
	}

	for _, a := range addrs {
		if ipnet, ok := a.(*net.IPNet); ok && !ipnet.IP.IsLoopback() {
			if ipnet.IP.To4() != nil {
				fmt.Println("SITE OPEN: http://" + ipnet.IP.String() + ":8085")
			}
		}
	}
}
