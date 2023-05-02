import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Tower, TowerService } from '@growth-tower/web/tower-service';
import { Observable, map } from 'rxjs';

export interface GrowthTowerState {
  towers: Tower[];
  singleTowerValues: Tower[];
}

const initialState: GrowthTowerState = {
  towers: [],
  singleTowerValues: []
};
@Injectable()
export class GrowthTowerComponentStore extends ComponentStore<GrowthTowerState> {

  getTowerData$: Observable<Tower[]> = this.towerService.towerData$;

  readonly updateRecords = this.updater<Tower[]>((state, data) => ({
    ...state,
    towers: [...data]
  }));


  readonly updateSignleTowerValues= this.updater<Tower[]>((state, data) => ({
    ...state,
    singleTowerValues: [...data]
  }));


  constructor(private towerService: TowerService) {
    super(initialState);
  }
}
