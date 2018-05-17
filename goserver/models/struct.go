package models

type CommandRecord struct {
	//TypeRcord: 1 - Сontrolled, 2 - Command
	TypeRecord byte `json:"type_record"`
	//Command: 0 - Put buffer,     1 - Open page, 2 - Stop
	//Command: 3 - Sound off,  	   4 - Sound on,  5 - off
	//Command: 6 - Open youtube,   7 - Open vk,   8 - Open ok
	//Command: 9 - Open fecebook, 10 - Open,     11 - Used code in terminal
	Command int `json:"command"`
	//Addition to the command
	StringCommand string `json:"string_command"`
	//Lenght word
	NumberOfWords int `json:"number_of_words"`
	//Сontrolled ID
	СontrolledID int `json:"controlled_id"`
}

type Сontrolled struct {
	Name string `json:"name"`
	Host string `json:"host"`
	Port string `json:"port"`
	// CommonBuffer 1 - Yes, 0 - No
	CommonBuffer int `json:"common_buffer"`
	HomeControlID int `json:"home_control_id"`
}
