import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TowerService } from '@growth-tower/services/tower-service';

@Component({
  selector: 'growth-tower-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
   {{towerData$ | async | json}}
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {

  towerService =inject(TowerService);

  towerData$ = this.towerService.towerData$;

}
