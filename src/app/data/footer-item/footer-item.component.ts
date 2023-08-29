import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../../shared/base/base.component';
import { User } from '../data.model';
import * as fromRoot from '../../store/app.reducer';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-footer-item',
  standalone: true,
  styleUrls: ['./styles/footer-item.component.css'],
  templateUrl: './footer-item.component.html',
})
export class FooterItemComponent extends BaseComponent implements OnInit {
  user$: Observable<User>;
  @Input() item: string;
  @Input() key: string;

  ngOnInit(): void {
    super.ngOnInit();

    this.user$ = this.store.select(fromRoot.selectDataUser);

    this.key = this.key ?? this.item;
  }
}
