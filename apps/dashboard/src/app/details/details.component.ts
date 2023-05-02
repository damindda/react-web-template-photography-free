import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TowerService } from '@growth-tower/services/tower-service';
import { Tower } from '@growth-tower/web/tower-service';
import { Observable, filter, map, tap } from 'rxjs';

import { GrowthTrayComponent } from '@growth-tower/web/ui/growth-tray'

@Component({
  standalone: true,
  selector: 'growth-tower-dashboard-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [CommonModule, GrowthTrayComponent]
})
export class DetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  towerService = inject(TowerService);
  towerData$: Observable<Tower[]> = this.towerService.towerData$;
  newData$!: Observable<any[]>;

  ngOnInit() {
    
    const id = this.route.snapshot.params['id'];

    this.newData$ = this.towerService.towerData$.pipe (
      map(items => 
       items.filter(item => item.number  === Number(id))) )
  }
}
