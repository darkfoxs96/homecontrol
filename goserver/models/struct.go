package models

// CommandRecord struct to all 'command' !
type CommandRecord struct {
	//TypeRecord: 1 - Сontrolled, 2 - Command
	TypeRecord int `json:"type_record"`
	//Command:  0 - Put buffer,     1 - Open page, 2 - Stop
	//Command:  3 - Sound off,  	4 - Sound on,  5 - off
	//Command:  6 - Open youtube,   7 - Open vk,   8 - Open ok
	//Command:  9 - Open fecebook, 10 - Open,     11 - Used code in terminal
	//Command: 999 - testWork
	// TODO: commands for Third-party home control systems
	Command int `json:"command"`
	//Addition to the command
	StringCommand string `json:"string_command"`
	//Lenght word
	NumberOfWords int `json:"number_of_words"`
	//Сontrolled ID
	СontrolledID int `json:"controlled_id"`
}

// Сontrolled struct to all 'controlled' !
type Сontrolled struct {
	Name string `json:"name"`
	Host string `json:"host"`
	Port string `json:"port"`
	// CommonBuffer 1 - Yes, 0 - No
	CommonBuffer  int    `json:"common_buffer"`
	HomeControlID string `json:"home_control_id"`
}

// UseControl struct for package services/usecontrol
type UseControl struct {
	ReportUnauthorizedUse bool `json:"report_unauthorized_use"`
	// Format millisecond
	DetectedTime int `json:"detected_time"`
	// Format millisecond
	UsageLastTime int `json:"usage_last_time"`
	// Log for package services/usecontrol
	UsageLog []string `json:"usage_log"`
}

// Command struct for ListCommands
type Command struct {
	ID          int    `json:"id"`
	InfoCommand string `json:"info_command"`
}

// ListCommands commands list
// Name = controlSystemID, "controlled" = all controlledID
type ListCommands struct {
	Commands             []*Command `json:"commands"`
	Name                 string     `json:"name_interface"`
	StartRangeIDCommands int        `json:"start_range_id_commands"`
	EndRangeIDCommands   int        `json:"end_range_id_commands"`
}

// MessageToServer message to server
type MessageToServer struct {
	ControlledID int    `json:"controlled_id"`
	Message      string `json:"message"`
}

// Message server response message
type Message struct {
	Status      bool   `json:"status"`
	Message     string `json:"message"`
	IntMessage  int    `json:"int_message"`
	BoolMessage bool   `json:"bool_message"`
}

// Session control user
type Session struct {
	VersionPasswordHash string `json:"version_password_hash"`
	PasswordHash        string `json:"password_hash"`
	EmailPasswordHash   string `json:"email_password_hash"`
	EmailLogin          string `json:"email_login"`
	EmailSMTPServer     string `json:"email_smtp_server"`
}
