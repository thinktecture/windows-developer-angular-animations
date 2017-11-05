import {Location} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})
export class HeaderComponent {
  constructor(private _location: Location) {
  }

  public get isBackChevronVisible(): boolean {
    // Mock implementation, to be extended to only show the button on iOS
    return this._location.path() !== '/home';
  }

  public goBack() {
    this._location.back();
  }
}
