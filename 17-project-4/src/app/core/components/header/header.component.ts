import { Component } from '@angular/core';
import { Theme } from '../../enums/Theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public icon = Theme['MOON_ICON'];

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    this.icon = theme ? Theme['SUN_ICON'] : Theme['MOON_ICON'];
  }
}
