import { IAppReducerState, reducer } from "./appReducer";

import { ActionReducerMap } from "@ngrx/store"


interface AppState {
  appReducer: IAppReducerState
}

export const Reducers: ActionReducerMap<AppState> = {
  appReducer: reducer
};
