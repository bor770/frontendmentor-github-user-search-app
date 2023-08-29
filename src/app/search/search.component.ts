import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import * as DataActions from '../data/store/data.actions';
import * as fromRoot from '../store/app.reducer';

@Component({
  imports: [CommonModule, LetDirective, ReactiveFormsModule],
  selector: 'app-search',
  standalone: true,
  styleUrls: [
    './styles/search.component.css',
    `./styles/dark.search.component.css`,
    `./styles/light.search.component.css`,
    `./styles/mobile.search.component.css`,
    `./styles/tablet.search.component.css`,
    `./styles/desktop.search.component.css`,
  ],
  templateUrl: './search.component.html',
})
export class SearchComponent extends BaseComponent implements OnInit {
  form: FormGroup;
  notFound$: Observable<boolean>;

  ngOnInit(): void {
    super.ngOnInit();

    this.form = new FormGroup({
      userName: new FormControl(null, Validators.required),
    });

    this.notFound$ = this.store.select(fromRoot.selectDataNotFound);
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(
        DataActions.fetchUser({ userName: this.form.value.userName })
      );
    }
  }
}
