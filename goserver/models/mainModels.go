package models

import (
	"encoding/json"
	"io/ioutil"
	"os"
	"path/filepath"
)

type MainModel struct {
	CommandRecords                  map[string]*CommandRecord
	Сontrolleds                     map[int]*Сontrolled
	IncrementForInsertСontrolleddID int `json:"increment_for_insert_controlled_id"`
}

const (
	fileNameMainModel = "./models/mainmodel.json"
)

var (
	mainModel *MainModel
	Path      string
	Test      bool
)

func init() {
	//Testing system
	Test = true
	//Get path
	dir, err := filepath.Abs(filepath.Dir(os.Args[0]))
	if err != nil {
		return
	}
	Path = dir + "/"
	if Test {
		Path = ""
	}

	//Load MainModel
	mainModel = &MainModel{
		CommandRecords:                  make(map[string]*CommandRecord),
		Сontrolleds:                     make(map[int]*Сontrolled),
		IncrementForInsertСontrolleddID: 0,
	}
	raw, err := ioutil.ReadFile(fileNameMainModel)
	if err == nil {
		json.Unmarshal(raw, mainModel)
	}
}

func Save() error {
	return save()
}

func save() error {
	raw, err := json.Marshal(mainModel)
	if err != nil {
		return err
	}
	err = ioutil.WriteFile(fileNameMainModel, raw, 0666)
	return err
}
