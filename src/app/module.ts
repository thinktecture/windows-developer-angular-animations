import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header/header';
import {HomeComponent} from './components/home/home';
import {MenuComponent} from './components/menu/menu';
import {RootComponent} from './components/root/root';
import {ROUTES} from './routes';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  bootstrap: [RootComponent]
})
export class AppModule {
}
