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
  styleUrls: ['./styles/header.component.css'],
  templateUrl: './header.component.html',
})
export class HeaderComponent extends BaseComponent {
  otherTheme(theme: Theme): Theme {
    return theme === `dark` ? `light` : `dark`;
  }

  otherThemeIcon(theme: Theme) {
    return theme === `dark` ? `sun` : `moon`;
  }

  otherThemeImgSrc(theme: Theme) {
    return `../../assets/images/icon-${this.otherThemeIcon(theme)}.svg`;
  }

  otherThemeImgAlt(theme: Theme) {
    const otherThemeIcon = this.otherThemeIcon(theme);

    return `${otherThemeIcon[0].toUpperCase()}${otherThemeIcon.slice(1)}`;
  }

  onToggleTheme() {
    this.store.dispatch(ThemeActions.toggle());
  }
}
