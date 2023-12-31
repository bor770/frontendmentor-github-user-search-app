import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../shared/base/base.component';
import { Theme } from '../shared/theme/theme.model';
import * as ThemeActions from '../shared/theme/store/theme.actions';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-header',
  standalone: true,
  styleUrls: [
    './styles/header.component.css',
    `./styles/dark.header.component.css`,
    `./styles/light.header.component.css`,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent extends BaseComponent {
  iconHoverStatus = false;

  otherTheme(theme: Theme): Theme {
    return theme === `dark` ? `light` : `dark`;
  }

  otherThemeIcon(theme: Theme) {
    return theme === `dark` ? `sun` : `moon`;
  }

  otherThemeImgSrc(theme: Theme) {
    return `../../assets/images/icon-${this.otherThemeIcon(theme)}${
      this.iconHoverStatus ? '-hover' : ''
    }.svg`;
  }

  onToggleTheme() {
    this.store.dispatch(ThemeActions.toggle());
  }

  toggleIconHoverStatus() {
    this.iconHoverStatus = !this.iconHoverStatus;
  }
}
