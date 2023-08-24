import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import { FooterData, StatsData, User } from './data.model';
import * as fromRoot from '../store/app.reducer';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-data',
  standalone: true,
  styleUrls: [
    './styles/data.component.css',
    `./styles/dark.data.component.css`,
    `./styles/mobile.data.component.css`,
  ],
  templateUrl: './data.component.html',
})
export class DataComponent extends BaseComponent implements OnInit {
  footer: FooterData = [
    { iconName: `location`, key: `location` },
    { iconName: `website`, key: `blog` },
    { iconName: `twitter`, key: `twitter_username` },
    { iconName: `company`, key: `company` },
  ];
  stats: StatsData = [
    { displayed: `Repos`, key: `public_repos` },
    { displayed: `Followers`, key: `followers` },
    { displayed: `Following`, key: `following` },
  ];
  user$: Observable<User>;

  ngOnInit(): void {
    super.ngOnInit();

    this.user$ = this.store.select(fromRoot.selectDataState);
  }

  valueWithDefault(value: string) {
    return value || `Not Available`;
  }
}
