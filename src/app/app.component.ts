import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from './shared/base/base.component';
import { DataComponent } from './data/data.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';

@Component({
  imports: [
    CommonModule,
    LetDirective,
    RouterOutlet,
    DataComponent,
    HeaderComponent,
    SearchComponent,
  ],
  selector: 'app-root',
  standalone: true,
  styleUrls: [
    './styles/app.component.css',
    `./styles/dark.app.component.css`,
    `./styles/light.app.component.css`,
    `./styles/mobile.app.component.css`,
    `./styles/tablet.app.component.css`,
    `./styles/desktop.app.component.css`,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent extends BaseComponent {}
