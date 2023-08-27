import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromData from '../data/store/data.reducer';
import * as fromLayout from '../shared/layout/store/layout.reducer';
import * as fromTheme from '../shared/theme/store/theme.reducer';

interface AppState {
  data: fromData.State;
  layout: fromLayout.State;
  theme: fromTheme.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  data: fromData.dataReducer,
  layout: fromLayout.layoutReducer,
  theme: fromTheme.themeReducer,
};

const selectDataState = createFeatureSelector<fromData.State>(`data`);

export const selectDataUser = createSelector(selectDataState, fromData.getUser);

const selectLayout = createFeatureSelector<fromLayout.State>(`layout`);

export const selectLayoutWidth = createSelector(
  selectLayout,
  fromLayout.getWidth
);

const selectThemeState = createFeatureSelector<fromTheme.State>(`theme`);

export const selectTheme = createSelector(selectThemeState, fromTheme.getTheme);
