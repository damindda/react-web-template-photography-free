import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TowerService } from '@growth-tower/services/tower-service';
import { Tower } from '@growth-tower/web/tower-service';
import { Observable, map } from 'rxjs';

import { GrowthTrayComponent } from '@growth-tower/web/ui/growth-tray';
import { GrowthTowerComponentStore } from '@growth-tower/web/data-access';
import { TowerSelectorComponent } from '@growth-tower/shared/ui/tower-selector';

@Component({
  standalone: true,
  selector: 'growth-tower-dashboard-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [CommonModule, GrowthTrayComponent, TowerSelectorComponent, AsyncPipe],
  providers: [GrowthTowerComponentStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  componentStore = inject(GrowthTowerComponentStore);
  towerService = inject(TowerService);
  towerData$: Observable<Tower[]> = this.componentStore.getTowerData$;
  splittedTrayData$!: Observable<Tower[]>;
  
  ngOnInit() {
    const id = Number(this.route.snapshot.params['id']);
    this.setSingleToweValues(id);
  }

  handleTowerSelection(id: number): void {
    this.setSingleToweValues(id);
  }

  handleRouterChange(id: number): void {
    this.router.navigate(['/dashboard', id]);
  }

  setSingleToweValues(id: number): void {
    this.splittedTrayData$ = this.towerData$.pipe(map(items => items.filter(item => item.number === id)));
    this.handleRouterChange(id);
  }
}
