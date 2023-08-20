import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Theme } from '../theme/theme.model';
import { Width } from '../layout/layout.model';
import * as fromRoot from '../../store/app.reducer';

@Component({
  imports: [CommonModule],
  selector: 'app-base',
  standalone: true,
  styleUrls: ['./base.component.css'],
  templateUrl: './base.component.html',
})
export class BaseComponent implements OnInit {
  theme$: Observable<Theme>;
  width$: Observable<Width>;

  constructor(public store: Store) {}

  ngOnInit(): void {
    this.theme$ = this.store.select(fromRoot.selectTheme);
    this.width$ = this.store.select(fromRoot.selectLayoutWidth);
  }
}
