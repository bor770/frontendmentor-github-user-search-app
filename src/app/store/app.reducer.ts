import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromData from '../data/store/data.reducer';

interface AppState {
  data: fromData.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  data: fromData.dataReducer,
};

export const selectDataState = createFeatureSelector<fromData.State>(`data`);
