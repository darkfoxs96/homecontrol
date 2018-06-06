export class Command {
  id:           number = 0;
  info_command: string = '';
}

export class ListCommands {
  commands:                Command[] = [];
  name_interface:          string = '';
  start_range_id_commands: number = 0;
  end_range_id_commands:   number = 0;
}
