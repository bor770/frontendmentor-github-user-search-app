import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import { FooterItems, StatsData, User } from './data.model';
import * as fromRoot from '../store/app.reducer';
import { FooterItemComponent } from './footer-item/footer-item.component';

@Component({
  imports: [CommonModule, LetDirective, FooterItemComponent],
  selector: 'app-data',
  standalone: true,
  styleUrls: [
    './styles/data.component.css',
    `./styles/dark.data.component.css`,
    `./styles/light.data.component.css`,
    `./styles/mobile.data.component.css`,
    `./styles/tablet.data.component.css`,
    `./styles/desktop.data.component.css`,
  ],
  templateUrl: './data.component.html',
})
export class DataComponent extends BaseComponent implements OnInit {
  footerItems: FooterItems = [
    { item: `location`, key: `location` },
    { item: `website`, key: `blog` },
    { item: `twitter`, key: `twitter_username` },
    { item: `company`, key: `company` },
  ];
  stats: StatsData = [
    { displayed: `Repos`, key: `public_repos` },
    { displayed: `Followers`, key: `followers` },
    { displayed: `Following`, key: `following` },
  ];
  user$: Observable<User>;

  ngOnInit(): void {
    super.ngOnInit();

    this.user$ = this.store.select(fromRoot.selectDataUser);
  }
}
