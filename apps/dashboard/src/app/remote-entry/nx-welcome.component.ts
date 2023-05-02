import { Component, ViewEncapsulation, inject } from '@angular/core';
import { TowerService } from '@growth-tower/services/tower-service';
import { Tower } from '@growth-tower/web/tower-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'growth-tower-nx-welcome',
  template: `
    <div class="main-content p-20">
      <h2 class="p-20">Towers</h2>
      <div class="tower-content p-20">
        <ng-container *ngIf="towerData$ | async as towerData; else loadingTemplate">
          <div *ngFor="let item of towerData">
            <div>{{ item.number }}</div>
            <button (click)="getSlotDetails(item)">Get Values</button>
            <a routerLink="./{{ item.number }}">growth tray {{ item.number }}</a>
          </div>
        </ng-container>
      </div>
    </div>
    <ng-template #loadingTemplate>
      <div>data is loading, please wait....!</div>
    </ng-template>
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
