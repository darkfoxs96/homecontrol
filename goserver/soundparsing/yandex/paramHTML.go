package yandex

import (	
	"strings"
)

func (sp *SoundParsing) getParamHTML() (paramHTML string, err error) {
	paramHTML = `{
		["key","string","{{.Key}}"]
		["Create SpeechKit Cloud key yandex","url","https://developer.tech.yandex.ru/"]
		["lang","list","{{.Lang}}","ru-RU","en-US","uk-UK","tr-TR"]
		["topic","list","{{.Topic}}","queries","maps"]
		["uuid","string","{{.UUID}}"]
	}`

	paramHTML = strings.Replace(paramHTML, "{{.Key}}", sp.Settings.Key, -1)
	paramHTML = strings.Replace(paramHTML, "{{.UUID}}", sp.Settings.UUID, -1)
	paramHTML = strings.Replace(paramHTML, "{{.Topic}}", sp.Settings.Topic, -1)
	paramHTML = strings.Replace(paramHTML, "{{.Lang}}", sp.Settings.Lang, -1)

	return
}