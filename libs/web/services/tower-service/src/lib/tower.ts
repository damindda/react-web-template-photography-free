import { GrowthJob } from "./growth-job";
import { Slot } from "./slot";


export class Tower {
  constructor(public number: number, public slots: Slot[]) {
  }

  public getGrowthJobs(): GrowthJob[] {
    const allGrowthJobs: GrowthJob[] = [];

    for (let i = 0; i < this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot.growthTray?.growthJob != null) {
        allGrowthJobs.push(slot.growthTray.growthJob);
      }

    }

    return allGrowthJobs;
  }
}
