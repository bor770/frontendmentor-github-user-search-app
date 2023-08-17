import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromData from '../data/store/data.reducer';
import * as fromLayout from '../shared/layout/store/layout.reducer';

interface AppState {
  data: fromData.State;
  layout: fromLayout.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  data: fromData.dataReducer,
  layout: fromLayout.layoutReducer,
};

export const selectDataState = createFeatureSelector<fromData.State>(`data`);

const selectLayout = createFeatureSelector<fromLayout.State>(`layout`);

export const selectLayoutWidth = createSelector(
  selectLayout,
  fromLayout.getWidth
);
