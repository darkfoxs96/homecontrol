package yandex

import (
	"homecontrol/goserver/models"
	
	"strings"
	"errors"
	"io/ioutil"
)

func (sp *SoundParsing) getHTML() (HTML string, err error) {
	templateByte, err := ioutil.ReadFile(models.Path + "soundparsing/yandex/settings.tpl")
	if err != nil {
		err = errors.New("yandex SoundParsing: " + err.Error())
		return
	}

	HTML = string(templateByte)
	HTML = strings.Replace(HTML, "{{.NameID}}", sp.nameID, -1)
	HTML = strings.Replace(HTML, "{{.Key}}", sp.Settings.Key, -1)
	HTML = strings.Replace(HTML, "{{.UUID}}", sp.Settings.UUID, -1)
	HTML = strings.Replace(HTML, "{{.Lang}}", sp.Settings.Lang, -1)
	HTML = strings.Replace(HTML, "{{.Topic}}", sp.Settings.Topic, -1)

	return
}
