import { createAction, props } from '@ngrx/store';

import { User } from '../data.model';

export const fetchUser = createAction(
  `[Data] Fetch User`,
  props<{ userName: string }>()
);
export const setNotFound = createAction(`[Data] Set Not Found`);
export const setUser = createAction(`[Data] Set User`, props<{ user: User }>());
