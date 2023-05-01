export interface GrowthJob {
  name: string;
  progressPercentage: number;
}

export interface GrowthTray {
  identifier: string;
  growthJob: GrowthJob;
}

export interface Slots {
  number: number;
  growthTray: GrowthTray;
}

export interface GrowthTower {
  number: number;
  slots: Slots[];
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
