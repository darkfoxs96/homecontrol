package models

import (
	"encoding/json"
	"io/ioutil"
	"os"
	"path/filepath"
	"sync"
)

type MainModel struct {
	CommandRecords                  map[string]*CommandRecord
	Сontrolleds                     map[int]*Сontrolled
	IncrementForInsertСontrolleddID int    `json:"increment_for_insert_controlled_id"`
	CommonBuffer                    string `json:"common_buffer"`
}

const (
	fileNameMainModel = "models/mainmodel.json"
)

var (
	mainModel *MainModel
	locker    sync.Mutex
	// Path to project
	Path string
	// Test for testing systems
	Test bool
)

// Lock locker
func Lock() {
	locker.Lock()
}

// Unlock locker
func Unlock() {
	locker.Unlock()
}

func init() {
	//Testing system
	Test = false
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
	raw, err := ioutil.ReadFile(Path + fileNameMainModel)
	if err == nil {
		json.Unmarshal(raw, mainModel)
	}
}

// Save to json file
func Save() error {
	return save()
}

func save() error {
	raw, err := json.Marshal(mainModel)
	if err != nil {
		return err
	}
	err = ioutil.WriteFile(Path+fileNameMainModel, raw, 0666)
	return err
}
