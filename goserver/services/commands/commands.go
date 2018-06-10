package commands

import (
	"homecontrol/goserver/models"
	"homecontrol/goserver/services/commandrecord"
	"homecontrol/goserver/services/controlsystemhome"
)

// GetAllListsCommands get all lists commands, all controlleds and all homeControlInterface
func GetAllListsCommands() (listsCommands []*models.ListCommands) {
	listsCommands = append(listsCommands, commandrecord.GetListCommands())
	for _, val := range controlsystemhome.ControlSystemHomeInterfaces {
		if _, supporting := val.IsSupporting(); !supporting {
			continue
		}
		list, err := val.GetListCommands()
		if err != nil {
			continue
		}
		listsCommands = append(listsCommands, list)
	}
	// TODO: For testing frontend !
	commands := []*models.Command{
		&models.Command{
			ID:          1001,
			InfoCommand: "Close door",
		},
	}

	listsCommands = append(listsCommands, &models.ListCommands{
		Name:                 "noolite4",
		StartRangeIDCommands: 1000,
		EndRangeIDCommands:   1999,
		Commands:             commands,
	})
	return
}
