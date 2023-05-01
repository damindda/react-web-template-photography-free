import { Component, ViewEncapsulation, inject } from '@angular/core';
import { TowerService } from '@growth-tower/services/tower-service';
import { Tower } from '@growth-tower/web/tower-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'growth-tower-nx-welcome',
  template: `
    <div *ngFor="let item of towerData$ | async">
      <div>{{ item.number }}</div>
      <button (click)="getSlotDetails(item)">Get Values</button>
      <a routerLink="./{{ item.number }}">growth tray number {{ item.number }}</a>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class NxWelcomeComponent {
  towerService = inject(TowerService);

  towerData$: Observable<Tower[]> = this.towerService.towerData$;

  getSlotDetails(details: Tower): void {
    console.log('slot details', details);
  }
}
