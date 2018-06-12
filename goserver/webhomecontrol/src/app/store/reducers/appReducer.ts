import { GO_RELOAD_ARRAY, RELOAD_ARRAY } from "../actions/appActions";

import { Controlled } from "../../models/controlled.model";
import { CommandRecord } from "../../models/command-record.model";
import { ListCommands } from "../../models/list-commands.model";

export interface IAppReducerState {
  type:                any;
  list_controlled:     Controlled[];
  list_commands:       ListCommands[];
  list_command_record: CommandRecord[];
}

const initalSate: IAppReducerState = {
  type:                {},
  list_controlled:     [],
  list_commands:       [],
  list_command_record: [],
};

export function reducer(state = initalSate, action): IAppReducerState {
  switch(action.type) {
    case RELOAD_ARRAY:
      return {
        ...state,
        type:                action.type,
        list_controlled:     action.list_controlled,
        list_commands:       action.list_commands,
        list_command_record: action.list_command_record,
      };
    case GO_RELOAD_ARRAY:
      return {
        ...state,
        type:                action.type,
        list_controlled:     state.list_controlled,
        list_commands:       state.list_commands,
        list_command_record: state.list_command_record,
      }
    default:
      return state;
  }
}
