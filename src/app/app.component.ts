import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DataComponent } from './data/data.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';

@Component({
  imports: [
    CommonModule,
    RouterOutlet,
    DataComponent,
    HeaderComponent,
    SearchComponent,
  ],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {}
