import {animate, AnimationPlayer, AnimationTriggerMetadata, query, stagger, style, transition, trigger} from '@angular/animations';
import {Component, OnDestroy, ViewChild} from '@angular/core';

export const numbersPageInPageOutAnimation = trigger('numbersPageInPageOutAnimation', [
  transition(':enter', [
    query('.bubble', style({ opacity: 0 }), { optional: true }),
    query('.bubble', stagger(300, [
      style({ transform: 'translateY(100px)' }),
      animate('250ms cubic-bezier(.68,.15,.34,1.38)', style({ transform: 'translateY(0px)', opacity: 1 })),
    ]), { optional: true })
  ]),
  transition(':leave', [
    query('.bubble', stagger(300, [
      animate('250ms cubic-bezier(.68,.15,.34,1.38)', style({ transform: 'translateY(100px)', opacity: 0 })),
    ]), { optional: true })
  ])
]);

export const numbersNgForAnimation = trigger('numberNgForAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0 }),
      stagger(300, [
        style({ transform: 'translateY(100px)' }),
        animate('250ms cubic-bezier(.68,.15,.34,1.38)', style({ transform: 'translateY(0px)', opacity: 1 })),
      ])
    ], { optional: true }),
    query(':leave', stagger(300, [
      animate('250ms cubic-bezier(.68,.15,.34,1.38)', style({ transform: 'translateY(100px)', opacity: 0 })),
    ]), { optional: true })
  ])
]);

@Component({
  selector: 'app-ng-for',
  templateUrl: 'ngFor.component.html',
  animations: [numbersPageInPageOutAnimation, numbersNgForAnimation],
  host: {
    '[@numbersPageInPageOutAnimation]': ''
  }
})
export class NgForComponent {
  public delayedNumbers: number[] = [];
  private readonly numbers: number[] = [1, 2, 3, 4, 5];
  public startNumbers = [...this.numbers];

  public getData(): void {
    setTimeout(() => {
      this.delayedNumbers = [...this.numbers];
    }, 250);
  }

  public clear(): void {
    this.delayedNumbers = [];
  }
}
