import { createReducer, on } from '@ngrx/store';

import { User } from '../data.model';

import * as DataActions from './data.actions';

export interface State {
  user: User;
}

const initialState: State = { user: null };

export const dataReducer = createReducer(
  initialState,
  on(DataActions.setUser, (state, { user }): State => ({ ...state, user }))
);

export const getUser = (state: State) => state.user;
