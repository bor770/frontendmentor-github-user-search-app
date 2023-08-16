import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, rootEffectsInit } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import { User } from '../data.model';
import * as DataActions from './data.actions';

@Injectable()
export class DataEffects {
  initalUsername = `octocat`;

  fetchInitialUser = createEffect(() => {
    return this.actions$.pipe(
      ofType(rootEffectsInit),
      map(() => DataActions.fetchUser({ username: this.initalUsername }))
    );
  });

  fetchUser = createEffect(() => {
    return this.actions$.pipe(
      ofType(DataActions.fetchUser),
      switchMap((fetchUserAction) =>
        this.http
          .get<User>(`https://api.github.com/users/${fetchUserAction.username}`)
          .pipe(map((user) => DataActions.setUser({ user })))
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
