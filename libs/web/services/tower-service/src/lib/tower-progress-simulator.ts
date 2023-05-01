import { GrowthJob } from "./growth-job";
import { GrowthTray } from "./growth-tray";
import { Slot } from "./slot";
import { Tower } from "./tower";

export class TowerProgressSimulator {
  public incrementProgress(towers: Tower[]): Tower[] {
    const newTowers: Tower[] = [];

    for (let i = 0; i < towers.length; i++) {
      const tower = towers[i];

      /* Copying the tower object means clients will need to properly react to
        changes in the observable values rather than angular
        picking up there's been a change in the existing reference automatically.

        This should be a better representation of how values would be coming in
        from a servers
      */
      const newTower = this.copyTower(tower);
      newTower.getGrowthJobs().forEach(x => x.increment());

      newTower.slots.forEach(slot => {
        if (slot.growthTray?.growthJob?.isFinished()) {
          slot.growthTray.growthJob = new GrowthJob(this.getRandomGrowthJobName(), 0);
        }
      });

      newTowers.push(newTower);
    }

    return newTowers;
  }

  private getRandomGrowthJobName() {
    const growthJobNames = ['Basil', 'Strawberry', 'Tomato', 'Kale', 'Lettuce'];

    const min = 0;
    const max = growthJobNames.length - 1;

    const randomIndex = Math.floor(Math.random() * (max - min) + min);;

    return growthJobNames[randomIndex];
  }

  private copyTower(oldTower: Tower): Tower {
    const newSlots: Slot[] = [];

    for (let i = 0; i < oldTower.slots.length; i++) {
      const oldSlot = oldTower.slots[i];

      let newGrowthTray: GrowthTray | null = null;
      let newGrowthJob: GrowthJob | null = null;
      if (oldSlot.growthTray != null) {

        if (oldSlot.growthTray.growthJob != null) {
          newGrowthJob = new GrowthJob(
            oldSlot.growthTray.growthJob.name,
            oldSlot.growthTray.growthJob.progressPercentage);
        }

        newGrowthTray = new GrowthTray(oldSlot.growthTray.identifier, newGrowthJob);
      }

      const newSlot = new Slot(oldSlot.number, newGrowthTray);
      newSlots.push(newSlot);
    }

    const newTower = new Tower(oldTower.number, newSlots);

    return newTower;
  }
}
