import { interval, map, Observable } from "rxjs";
import { StaticDataFactory } from "./static-data-factory";
import { Tower } from "./tower";
import { TowerProgressSimulator } from "./tower-progress-simulator";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class TowerService {
  public towerData$: Observable<Tower[]>;

  constructor() {
    const factory = new StaticDataFactory();
    let towers = factory.build();
    const simulator = new TowerProgressSimulator();
    
    this.towerData$ = interval(1000).pipe(
      map(() => {
        const newTowers = simulator.incrementProgress(towers);
        towers = newTowers;

        return newTowers;
      }));
  }
}

