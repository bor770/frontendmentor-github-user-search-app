import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { DataEffects } from './data/store/data.effects';
import { LayoutEffects } from './shared/layout/store/layout.effects';
import * as fromRoot from './store/app.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(DataEffects, LayoutEffects),
    provideHttpClient(),
    provideStore(fromRoot.appReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
