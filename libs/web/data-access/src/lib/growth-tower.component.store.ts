import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Tower, TowerService } from '@growth-tower/web/tower-service';
import { Observable, map, switchMap } from 'rxjs';

export interface GrowthTowerState {
  towers: Tower[];
  singleTowerValues: Tower[];
  status: string;
}

const initialState: GrowthTowerState = {
  towers: [],
  singleTowerValues: [],
  status: ''
};
@Injectable()
export class GrowthTowerComponentStore extends ComponentStore<GrowthTowerState> {
  getTowerData$: Observable<Tower[]> = this.towerService.towerData$;

  getSingleTowerData$: Observable<Tower[]> = this.select(state => state.singleTowerValues);

  readonly updateRecords = this.updater<Tower[]>((state, data) => ({
    ...state,
    towers: [...data]
  }));

  readonly updateSignleTowerValues = this.updater<Tower[]>((state, data) => ({
    ...state,
    singleTowerValues: [...data]
  }));

  readonly loadSingleTowerData = this.effect<number>(id$ =>
    id$.pipe(
      switchMap(id =>
        this.getTowerData$.pipe(
          map(items => items.filter(item => item.number === id)),
          tapResponse(
            data => {
              this.patchState({
                singleTowerValues: [...data]
              });
            },
            error => this.patchState({ status: 'error' })
          )
        )
      )
    )
  );

  constructor(private towerService: TowerService) {
    super(initialState);
  }
}
