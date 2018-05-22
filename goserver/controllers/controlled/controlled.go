package controlled

import (
	"bytes"
	"encoding/binary"
	"encoding/json"
	"strconv"

	"github.com/astaxie/beego"	
	
	"homecontrol/goserver/services/controlled"
)

type Controlled struct {
	beego.Controller
}

// Request struct for POST and PUT metods
type Request struct {
	ControlledID  int    `json:"id"`
	Name          string `json:"name"`
	Host          string `json:"host"`
	Port          string `json:"port"`
	CommonBuffer  int    `json:"common_buffer"`
	HomeControlID string `json:"home_control_id"`
}

// Post - create controlled
// Post public API
// @Title Create
// @Description create controlled
// @Param	body	body	Request		"The object content"
// @Success 200 int32
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [post]
func (c *Controlled) Post() {
	var request *Request
	err := json.Unmarshal(c.Ctx.Input.RequestBody, request)
	if err != nil {
		c.CustomAbort(400, "Can't unmarshal request")
	}

	request.ControlledID, err = controlled.RegistrationAndUpdateControlled(0, request.Host, request.Port, request.Name, request.CommonBuffer, request.HomeControlID)
	if err != nil {
		c.CustomAbort(500, err.Error())
	}

	IDbytes := new(bytes.Buffer)
	binary.Write(IDbytes, binary.LittleEndian, request.ControlledID)
	c.Ctx.Output.SetStatus(200)
	c.Ctx.Output.Body(IDbytes.Bytes())
}

// Put - update controlled
// Put public API
// @Title Update
// @Description update controlled
// @Param	body	body	Request		"The object content"
// @Success 200
// @Failure 400 wrong body data
// @Failure 500 database error
// @router / [put]
func (c *Controlled) Put() {
	var request *Request
	err := json.Unmarshal(c.Ctx.Input.RequestBody, request)
	if err != nil {
		c.CustomAbort(400, "Can't unmarshal request")
	}

	if request.ControlledID == 0 {
		c.CustomAbort(400, "No ID")
	}

	request.ControlledID, err = controlled.RegistrationAndUpdateControlled(request.ControlledID, request.Host, request.Port, request.Name, request.CommonBuffer, request.HomeControlID)
	if err != nil {
		c.CustomAbort(500, err.Error())
	}

	c.Data["json"] = "Ok"
	c.ServeJSON()
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

// Get - return favorite controlled or controlleds
// @Title Get
// @Description get controlled or controlleds
// @Param	id		int		false		return		models.Controlled			JSON
// @Success 200 	if no ID 			return		[]ResponseControlled		JSON
// @Failure 400 Can't strconv.Atoi param 'id'
// @Failure 500 database error
// @router /:id [get]
func (c *Controlled) Get() {
	strID := c.Ctx.Input.Param(":id")
	if strID != "" {
		controlledID, err := strconv.Atoi(strID)
		if err != nil {
			c.CustomAbort(400, "Can't strconv.Atoi param 'id'")
		}
		controlled := controlled.GetControlled(controlledID)
		c.Data["json"] = controlled
		c.ServeJSON()
		return
	}

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

	c.Data["json"] = controlleds
	c.ServeJSON()
}

// Delete - delete a favorite controlled
// @Title Delete
// @Description delete controlled
// @Param	id		int		true	"The id you want to delete"
// @Success 200
// @Failure 400 id is empty
// @Failure 500 database error
// @router /:id [delete]
func (c *Controlled) Delete() {
	controlledID, _ := strconv.Atoi(c.Ctx.Input.Param(":id"))
	if controlledID < 1 {
		c.CustomAbort(400, "Wrong id")
	}

	err := controlled.DeleteControlled(controlledID)
	if err != nil {
		c.CustomAbort(500, err.Error())
	}

	c.Data["json"] = "Ok"
	c.ServeJSON()
}

type InfoControlled struct {
	beego.Controller
}

// Get - return: information on all controlled
// @Title Get
// @Description get information on all controlled
// @Success 200	string
// @Failure 500 database error
// @router / [get]
func (c *InfoControlled) Get() {
	info, err := controlled.GetInfoControlledsString()
	if err != nil {
		c.CustomAbort(500, err.Error())
	}

	c.Ctx.Output.SetStatus(200)	
	c.Ctx.Output.Body([]byte(info))
}