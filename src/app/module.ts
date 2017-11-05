import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header/header';
import {HomeComponent} from './components/home/home';
import {MenuComponent} from './components/menu/menu';
import {NgForComponent} from './components/ngFor/ngFor.component';
import {RootComponent} from './components/root/root';
import {ROUTES} from './routes';
import {WindowRef} from './services/windowRef';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [WindowRef],
  bootstrap: [RootComponent]
})
export class AppModule {
}
