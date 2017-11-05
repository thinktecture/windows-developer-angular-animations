import {Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.html',
  styleUrls: ['menu.scss']
})
export class MenuComponent {
  private readonly _bodyCssClass = 'show-menu';
}
