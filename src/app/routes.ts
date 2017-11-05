import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home';
import {NgForComponent} from './components/ngFor/ngFor.component';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      state: 'home'
    }
  },
  {
    path: 'ngFor',
    component: NgForComponent,
    data: {
      state: 'ngFor'
    }
  }
];
