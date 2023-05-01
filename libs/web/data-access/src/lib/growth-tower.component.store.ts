import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { GrowthTowerRecord} from './models/growth-tower';

export interface GrowthTowerState {
    towers: GrowthTowerRecord
}

const initialState: GrowthTowerState = {
    towers: []
};
@Injectable()
export class GrowthTowerComponentStore extends ComponentStore<GrowthTowerState> {

    constructor(){
        super(initialState);
    }

    readonly updateRecords = this.updater<GrowthTowerRecord>((state, data) => ({
        ...state,
        towers: [...data]
    }))
}
