import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../../shared/base/base.component';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-footer-img',
  standalone: true,
  styleUrls: ['./footer-img.component.css'],
  templateUrl: './footer-img.component.html',
})
export class FooterImgComponent extends BaseComponent {
  @Input() item: string;
}
