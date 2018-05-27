package controlled

import (
	"encoding/json"
	"homecontrol/goserver/models"
	"io/ioutil"
	"strconv"

	"github.com/astaxie/beego"

	"homecontrol/goserver/services/controlled"
)

type Controlled struct {
	beego.Controller
}

// Post - create controlled
// @Title Post
// @Description create controlled
// @Param	body	body	models.Сontrolled	true		"The object content. fields Name and HomeControlID and CommonBuffer not required"
// @Success 200 string	"controlled ID"
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *Controlled) Post() {
	defer o.Ctx.Request.Body.Close()

	body, err := ioutil.ReadAll(o.Ctx.Request.Body)
	if err != nil {
		o.CustomAbort(400, "Wrong read body")
	}
	o.Ctx.Request.Body.Close()

	request := &models.Сontrolled{}
	err = json.Unmarshal(body, request)
	if err != nil {
		o.CustomAbort(400, "Can't unmarshal request")
	}

	controlledID, err := controlled.RegistrationAndUpdateControlled(0, request.Host, request.Port, request.Name, request.CommonBuffer, request.HomeControlID)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Ctx.Output.SetStatus(200)
	o.Ctx.Output.Body([]byte(strconv.Itoa(controlledID)))
}

// Put - update controlled
// @Title Put
// @Description update controlled
// @Param	body	body	models.Сontrolled	true	"The object content. CommonBuffer = -1 field remains unchanged, string empty fields remains unchanged"
// @Param	id		path	int					true	"The controlled you want to update"
// @Success 200	string	"ok"
// @Failure 400 wrong body data
// @Failure 500 database error
// @router /:id [put]
func (o *Controlled) Put() {
	defer o.Ctx.Request.Body.Close()

	body, err := ioutil.ReadAll(o.Ctx.Request.Body)
	if err != nil {
		o.CustomAbort(400, "Wrong read body")
	}
	o.Ctx.Request.Body.Close()

	request := &models.Сontrolled{}
	err = json.Unmarshal(body, request)
	if err != nil {
		o.CustomAbort(400, "Can't unmarshal request")
	}

	strID := o.Ctx.Input.Param(":id")
	if strID == "" {
		o.CustomAbort(400, "Wrong controlled id")
	}
	controlledID, err := strconv.Atoi(strID)
	if err != nil {
		o.CustomAbort(400, "Wrong controlled id")
	}

	_, err = controlled.RegistrationAndUpdateControlled(controlledID, request.Host, request.Port, request.Name, request.CommonBuffer, request.HomeControlID)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Ctx.Output.SetStatus(200)
	o.Ctx.Output.Body([]byte("ok"))
}

// ResponseControlled for GET metod, if no :id
type InformationСontrolled struct {
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
}

// Get - return favorite controlleds
// @Title Get
// @Description get controlleds
// @Success 200 	{object}	[]controlled.InformationСontrolled
// @Failure 500 database error
// @router / [get]
func (o *Controlled) Get() {
	mapControlleds := controlled.GetControlleds()
	var controlleds []*InformationСontrolled
	for key, val := range mapControlleds {
		if val == nil {
			continue
		}
		controlleds = append(controlleds, &InformationСontrolled{
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
// @Success 200 {object} models.Message
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

	o.Data["json"] = models.Message{Status: true}
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

	o.Data["json"] = models.Message{Status: true, Message: info}
	o.ServeJSON()
}

type ControlledMessage struct {
	beego.Controller
}

// Post - message to server
// @Title Post
// @Description message to server
// @Param	body			body	models.MessageToServer	true	"The object message"
// @Success 200 string	"out server msg"
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (o *ControlledMessage) Post() {
	defer o.Ctx.Request.Body.Close()

	body, err := ioutil.ReadAll(o.Ctx.Request.Body)
	if err != nil {
		o.CustomAbort(400, "Wrong read body")
	}
	o.Ctx.Request.Body.Close()

	request := &models.MessageToServer{}
	err = json.Unmarshal(body, request)
	if err != nil {
		o.CustomAbort(400, "Can't unmarshal request")
	}

	outMsg, err := controlled.InMessage(request.ControlledID, request.Message)
	if err != nil {
		o.CustomAbort(500, err.Error())
	}

	o.Ctx.Output.SetStatus(200)
	o.Ctx.Output.Body([]byte(outMsg))
}
