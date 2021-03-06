package models

import (
	"strings"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"sync"
	"time"

	"golang.org/x/crypto/bcrypt"
)

// MainModel = DB
type MainModel struct {
	CommandRecords                  map[string]*CommandRecord
	Сontrolleds                     map[int]*Сontrolled
	UseControl                      *UseControl
	Session                         *Session
	IncrementForInsertСontrolleddID int                    `json:"increment_for_insert_controlled_id"`
	CommonBuffer                    string                 `json:"common_buffer"`
	BotMessengersSettings           map[string]interface{} `json:"bot_messengers_settings"`
	SoundParsingsSettings           map[string]interface{} `json:"sound_parsings_settings"`
	AdditionControlSystemSettings   map[string]interface{} `json:"addition_control_system_settings"`
	UsedSoundParsingsID             string                 `json:"used_sound_parsings_id"`
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
	// ChOutMessageToAll chan for sending a message to everyone via bot-messenger
	ChOutMessageToAll chan string
	// CancelChOutMessageToAll closes ChOutMessageToAll
	CancelChOutMessageToAll chan struct{}
	// StopServer not connect client to server
	StopServer bool
	// TimeEndStopServer not connect client to server. Format second
	TimeEndStopServer int
	// CountBadConnect count error login
	CountBadConnect int
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
	if err == nil {
		dir = strings.Replace(dir, `\`, `/`, -1)
		Path = dir + "/"
		if Test {
			Path = "./"
		}
	} else {
		fmt.Println("Models(DB): Error load path, msg error: ", err.Error())
	}

	//Load MainModel
	ChOutMessageToAll = make(chan string, 3)
	CancelChOutMessageToAll = make(chan struct{})
	useControl := &UseControl{
		ReportUnauthorizedUse: false,
		// TODO: testing time !
		DetectedTime:  30 * 60, //30 minute, format second
		UsageLastTime: int(time.Now().Unix()),
		UsageLog:      []string{},
	}
	session := &Session{}
	mainModel = &MainModel{
		CommandRecords:                  make(map[string]*CommandRecord),
		Сontrolleds:                     make(map[int]*Сontrolled),
		UseControl:                      useControl,
		Session:                         session,
		BotMessengersSettings:           make(map[string]interface{}),
		SoundParsingsSettings:           make(map[string]interface{}),
		AdditionControlSystemSettings:   make(map[string]interface{}),
		UsedSoundParsingsID:             "",
		IncrementForInsertСontrolleddID: 0,
		CommonBuffer:                    "",
	}
	raw, err := ioutil.ReadFile(Path + fileNameMainModel)
	if err == nil {
		json.Unmarshal(raw, mainModel)
		err = SetUsedLastTime(int(time.Now().Unix()))
		if err != nil {
			fmt.Println("Models(DB): Error init, set last time, msg error: ", err.Error())
		}
	} else {
		fmt.Println("Models(DB): Error load mainmodel.json, msg error: ", err.Error())
	}
	if mainModel.Session.PasswordHash == "" {
		pasHash, err := bcrypt.GenerateFromPassword([]byte("admin"), bcrypt.DefaultCost)
		if err != nil {
			fmt.Println("Models(DB): init models(DB), Error bcrypt.GenerateFromPassword() msg error: ", err.Error())
		}
		err = SetPasswordHash(string(pasHash))
		if err != nil {
			fmt.Println(err)
		}
	}
}

// Save to json file
func Save() error {
	return save()
}

func save() error {
	raw, err := json.Marshal(mainModel)
	if err != nil {
		return errors.New("Models(DB): " + err.Error())
	}
	err = ioutil.WriteFile(Path+fileNameMainModel, raw, 0666)
	if err != nil {
		return errors.New("Models(DB): " + err.Error())
	}
	return err
}
