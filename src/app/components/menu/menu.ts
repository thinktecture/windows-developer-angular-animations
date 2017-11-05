import {Component} from '@angular/core';
import {WindowRef} from '../../services/windowRef';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.html',
  styleUrls: ['menu.scss']
})
export class MenuComponent {
  private readonly _bodyCssClass = 'show-menu';

  constructor(private readonly windowRef: WindowRef) {
  }

  public closeMenu(): void {
    this.windowRef.nativeWindow.document.body.classList.remove(this._bodyCssClass);
  }
}
