import { GrowthJob } from "./growth-job";


export class GrowthTray {
  constructor(public identifier: string, public growthJob: GrowthJob | null) {
  }
}
