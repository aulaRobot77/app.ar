import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeLeft =
  trigger('fadeLeft',[
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-10%)'
      }),
      animate('50ms ease-in',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      }))
    ])
  ]);
  export const fadeIn =
    trigger('fadeIn',[
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-20%)'
        }),
        animate('50ms ease-in',
        style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ]);
