import { createReducer, on } from '@ngrx/store';

import { Theme } from '../theme.model';
import * as ThemeActions from './theme.actions';

export interface State {
  theme: Theme;
}

const initialState: State = { theme: `dark` };

export const themeReducer = createReducer(
  initialState,
  on(
    ThemeActions.toggle,
    (state): State => ({
      ...state,
      theme: state.theme === `dark` ? `light` : `dark`,
    })
  )
);

export const getTheme = (state: State) => state.theme;
