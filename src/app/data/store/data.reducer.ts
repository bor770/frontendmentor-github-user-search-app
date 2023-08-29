import { createReducer, on } from '@ngrx/store';

import { User } from '../data.model';

import * as DataActions from './data.actions';

export interface State {
  notFound: boolean;
  user: User;
}

const initialState: State = { notFound: false, user: null };

export const dataReducer = createReducer(
  initialState,
  on(DataActions.setNotFound, (state): State => ({ ...state, notFound: true })),
  on(
    DataActions.setUser,
    (state, { user }): State => ({ ...state, notFound: false, user })
  )
);

export const getNotFound = (state: State) => state.notFound;
export const getUser = (state: State) => state.user;
