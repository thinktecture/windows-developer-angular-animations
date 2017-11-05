import {animate, animateChild, group, query, sequence, style, transition, trigger} from '@angular/animations';
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),
    sequence([
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('500ms cubic-bezier(.68,.15,.34,1.38)',
            style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('500ms cubic-bezier(.68,.15,.34,1.38)',
            style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
      ]),
      query(':enter', animateChild(), { optional: true }),
    ])
  ])
]);

@Component({
  selector: 'app-root',
  templateUrl: 'root.html',
  styleUrls: ['root.scss'],
  animations: [routerTransition]
})
export class RootComponent {
  public getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }
}
