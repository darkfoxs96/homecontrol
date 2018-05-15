package main

import (
	"fmt"
	"os"

	"github.com/astaxie/beego"

	"homecontrol/goserver/models"
	_ "homecontrol/goserver/routers"
	"homecontrol/goserver/services/commandrecord"
	"homecontrol/goserver/soundparsing"
)

func main() {
	// testOne()
	// return
	if !models.Test {
		beego.SetViewsPath(models.Path + "views")
		beego.SetStaticPath("/static/", models.Path+"static")
	}
	beego.Run()
}

func testOne() () {
	fi, err := os.Open("my2.wav")
	if err != nil {
		panic(err)
	}
	defer func() {
		if err := fi.Close(); err != nil {
			panic(err)
		}
	}()
	buf := make([]byte, 1024*1000)
	n, err := fi.Read(buf)
	if err != nil {
		panic(err)
	}
	buf = buf[:n]

	record := commandrecord.Record{
		ID:           "Открой",
		TypeRecord:   1,
		СontrolledID: 10,
	}

	err = commandrecord.AddOrUpdateRecord(&record)
	if err != nil {
		fmt.Println(err)
	}

	record = commandrecord.Record{
		ID:         "Страницу",
		TypeRecord: 2,
		Command:    1,
	}

	err = commandrecord.AddOrUpdateRecord(&record)
	if err != nil {
		fmt.Println(err)
	}

	commandID, controlledID, err := soundparsing.GetIDCommandANDControlledBySound(buf)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(commandID, " ", controlledID)
	}
}
