export interface GrowthJob {
  readonly name: string;
  readonly progressPercentage: number;
}

export interface GrowthTray {
  readonly identifier: string;
  readonly growthJob: GrowthJob;
}

export interface Slots {
  readonly number: number;
  readonly growthTray: GrowthTray;
}

export interface GrowthTower {
  readonly number: number;
  readonly slots: Slots[];
}

export type GrowthTowerRecord = readonly GrowthTower[];



// {
//     "number": 1,
//     "slots": [
//       {
//         "number": 1,
//         "growthTray": {
//           "identifier": "GT A1",
//           "growthJob": {
//             "name": "Basil",
//             "progressPercentage": 80,
//           }
//         }
//       },
//     ]
//   }
