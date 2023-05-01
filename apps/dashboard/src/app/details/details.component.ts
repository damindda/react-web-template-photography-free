import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TowerService } from '@growth-tower/services/tower-service';

@Component({
  standalone:true,
  selector: 'growth-tower-dashboard-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [CommonModule]
})
export class DetailsComponent implements OnInit {

  route = inject(ActivatedRoute);
  towerService = inject(TowerService);
  towerData$ = this.towerService.towerData$;

  ngOnInit() {
    console.log('params >>>>>>>', this.route.snapshot.params);
  }
}
