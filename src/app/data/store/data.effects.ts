import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, rootEffectsInit } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { User } from '../data.model';
import * as DataActions from './data.actions';

@Injectable()
export class DataEffects {
  initalUserName = `octocat`;

  fetchInitialUser = createEffect(() => {
    return this.actions$.pipe(
      ofType(rootEffectsInit),
      map(() => DataActions.fetchUser({ userName: this.initalUserName }))
    );
  });

  fetchUser = createEffect(() => {
    return this.actions$.pipe(
      ofType(DataActions.fetchUser),
      switchMap((fetchUserAction) =>
        this.http
          .get<User>(`https://api.github.com/users/${fetchUserAction.userName}`)
          .pipe(
            map((user) => DataActions.setUser({ user })),
            catchError(() => of(DataActions.setNotFound()))
          )
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
