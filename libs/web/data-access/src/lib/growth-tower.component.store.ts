import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Tower, TowerService } from '@growth-tower/web/tower-service';
import { Observable } from 'rxjs';

export interface GrowthTowerState {
    towers: Tower[];
}

const initialState: GrowthTowerState = {
    towers: []
};
@Injectable()
export class GrowthTowerComponentStore extends ComponentStore<GrowthTowerState> {

    getTowerData$: Observable<Tower[]> = this.towerService.towerData$;
    
    constructor(private towerService: TowerService){
        super(initialState);
    }

    readonly updateRecords = this.updater<Tower[]>((state, data) => ({
        ...state,
        towers: [...data]
    }))
}
