package controlled

import (
	"bytes"
	"encoding/binary"
	"encoding/json"
	"fmt"
	"strconv"

	"github.com/astaxie/beego"

	"homecontrol/goserver/services/controlled"
)

type Controlled struct {
	beego.Controller
}

// RequestPost struct for POST metods
type RequestPost struct {
	Name          string `json:"name"`
	Host          string `json:"host"`
	Port          string `json:"port"`
	CommonBuffer  int    `json:"common_buffer"`
	HomeControlID string `json:"home_control_id"`
}

// RequestPut struct for PUT metods
type RequestPut struct {
	ControlledID  int    `json:"id"`
	Name          string `json:"name"`
	Host          string `json:"host"`
	Port          string `json:"port"`
	CommonBuffer  int    `json:"common_buffer"`
	HomeControlID string `json:"home_control_id"`
}

// Post - create controlled
// @Title Post
// @Description create controlled
// @Param	body	body	controlled.RequestPost	true		"The object content"
// @Success 200 int	"controlled ID"
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *Controlled) Post() {
	request := &RequestPost{}
	fmt.Println(o.Ctx.Input.RequestBody)
	err := json.Unmarshal(o.Ctx.Input.RequestBody, request)
	if err != nil {
		fmt.Println(213)
		o.CustomAbort(400, "Can't unmarshal request")
	}

	controlledID, err := controlled.RegistrationAndUpdateControlled(0, request.Host, request.Port, request.Name, request.CommonBuffer, request.HomeControlID)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	IDbytes := new(bytes.Buffer)
	err = binary.Write(IDbytes, binary.LittleEndian, controlledID)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}
	o.Ctx.Output.SetStatus(200)
	o.Ctx.Output.Body(IDbytes.Bytes())
}

// Put - update controlled
// @Title Put
// @Description update controlled
// @Param	body	body	controlled.RequestPut	true		"The object content"
// @Success 200
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [put]
func (o *Controlled) Put() {
	var request *RequestPut
	err := json.Unmarshal(o.Ctx.Input.RequestBody, request)
	if err != nil {
		o.CustomAbort(400, "Can't unmarshal request")
	}

	if request.ControlledID == 0 {
		o.CustomAbort(400, "No ID")
	}

	request.ControlledID, err = controlled.RegistrationAndUpdateControlled(request.ControlledID, request.Host, request.Port, request.Name, request.CommonBuffer, request.HomeControlID)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = "Ok"
	o.ServeJSON()
}

// ResponseControlled for GET metod, if no :id
type ResponseControlled struct {
	ID            int    `json:"id"`
	Name          string `json:"name"`
	Host          string `json:"host"`
	Port          string `json:"port"`
	CommonBuffer  int    `json:"common_buffer"`
	HomeControlID string `json:"home_control_id"`
}

// GetOne - return favorite controlled
// @Title Get
// @Description get controlled
// @Param	id	path	int		true	"The controlled you want to receive"
// @Success 200 {object} models.Сontrolled
// @Failure 400 :object is empty
// @Failure 500 database error
// @router /:id [get]
func (o *Controlled) GetOne() {
	strID := o.Ctx.Input.Param(":id")
	if strID == "" {
		o.CustomAbort(400, "Wrong controlled id")
	}

	controlledID, err := strconv.Atoi(strID)
	if err != nil {
		o.CustomAbort(400, "Wrong controlled id")
	}

	controlled := controlled.GetControlled(controlledID)

	o.Data["json"] = controlled
	o.ServeJSON()
	return
}

// Get - return favorite controlleds
// @Title Get
// @Description get controlleds
// @Success 200 	{object}	[]controlled.ResponseControlled
// @Failure 500 database error
// @router / [get]
func (o *Controlled) Get() {
	mapControlleds := controlled.GetControlleds()
	var controlleds []*ResponseControlled
	for key, val := range mapControlleds {
		controlleds = append(controlleds, &ResponseControlled{
			ID:            key,
			Name:          val.Name,
			Host:          val.Host,
			Port:          val.Port,
			CommonBuffer:  val.CommonBuffer,
			HomeControlID: val.HomeControlID,
		})
	}

	o.Data["json"] = controlleds
	o.ServeJSON()
}

// Delete - delete a favorite controlled
// @Title Delete
// @Description delete controlled
// @Param	id	path	int		true	"The id you want to delete"
// @Success 200
// @Failure 400 id is empty
// @Failure 500 database error
// @router /:id [delete]
func (o *Controlled) Delete() {
	controlledID, _ := strconv.Atoi(o.Ctx.Input.Param(":id"))
	if controlledID < 1 {
		o.CustomAbort(400, "Wrong id")
	}

	err := controlled.DeleteControlled(controlledID)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Data["json"] = "Ok"
	o.ServeJSON()
}

type InfoControlled struct {
	beego.Controller
}

// Get - return: information on all controlled
// @Title Get
// @Description get information on all controlled
// @Success 200	string	"Info a controlleds"
// @Failure 500 database error
// @router / [get]
func (o *InfoControlled) Get() {
	info, err := controlled.GetInfoControlledsString()
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Ctx.Output.SetStatus(200)
	o.Ctx.Output.Body([]byte(info))
}

type ControlledMessage struct {
	beego.Controller
}

// Post - message to server
// @Title Post
// @Description message to server
// @Param	body			body	string	true	"The object message"
// @Param	controlledid	path	int		true	"The your id"
// @Success 200 string	"out server msg"
// @Failure 400 wrong body data
// @Failure 500 database error
// @router /:controlledid [post]
func (o *ControlledMessage) Post() {
	msg := string(o.Ctx.Input.RequestBody)
	fmt.Println(msg)
	if msg == "" {
		o.CustomAbort(400, "body empty")
	}

	controlledID, _ := strconv.Atoi(o.Ctx.Input.Param(":controlledid"))
	if controlledID < 1 {
		o.CustomAbort(400, "Wrong id")
	}

	outMsg, err := controlled.InMessage(controlledID, msg)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Ctx.Output.SetStatus(200)
	o.Ctx.Output.Body([]byte(outMsg))
}
