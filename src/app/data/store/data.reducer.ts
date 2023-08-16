import { createReducer, on } from '@ngrx/store';

import { User } from '../data.model';

import * as DataActions from './data.actions';

export type State = User;

const initialState: State = null;

export const dataReducer = createReducer(
  initialState,
  on(DataActions.setUser, (state, { user }): State => ({ ...state, ...user }))
);
