import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TowerService } from '@growth-tower/services/tower-service';
import { Tower } from '@growth-tower/web/tower-service';
import { Observable, filter, map, tap } from 'rxjs';

import { GrowthTrayComponent } from '@growth-tower/web/ui/growth-tray';
import { GrowthTowerComponentStore } from '@growth-tower/web/data-access';
import { TowerSelectorComponent } from '@growth-tower/shared/ui/tower-selector';

@Component({
  standalone: true,
  selector: 'growth-tower-dashboard-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [CommonModule, GrowthTrayComponent, TowerSelectorComponent],
  providers: [GrowthTowerComponentStore]

})
export class DetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  componentStore = inject(GrowthTowerComponentStore);
  towerService = inject(TowerService);
  towerData$: Observable<Tower[]> = this.componentStore.getTowerData$;
  splittedTrayData$!: Observable<Tower[]>;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.splittedTrayData$ = this.towerData$.pipe(
      map(items => items.filter(item => item.number === Number(id)))
    );
  }
}
