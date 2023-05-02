import { Component, inject } from '@angular/core';
import { TowerService } from '@growth-tower/services/tower-service';
import { GrowthTowerComponentStore } from '@growth-tower/web/data-access';
import { Tower } from '@growth-tower/web/tower-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'growth-tower-nx-welcome',
  template: `
    <div class="main-content p-20">
      <h2 class="p-20">Towers</h2>
      <div class="flex">
        <ng-container *ngIf="towerData$ | async as towerData; else loadingTemplate">
          <div *ngFor="let item of towerData" class="tower-content p-20">
            <a routerLink="./{{ item.number }}" class="p-20">
              <h3 class="pb-6">Tower Number {{ item.number }}</h3>
              <label>Check Details of tower {{ item.number }}</label>
            </a>
          </div>
        </ng-container>
      </div>
    </div>
    <ng-template #loadingTemplate>
      <div>data is loading, please wait....!</div>
    </ng-template>
  `,
  providers: [GrowthTowerComponentStore]
})
export class NxWelcomeComponent {
  towerService = inject(TowerService);
  componentStore = inject(GrowthTowerComponentStore);
  towerData$: Observable<Tower[]> = this.componentStore.getTowerData$;
}
