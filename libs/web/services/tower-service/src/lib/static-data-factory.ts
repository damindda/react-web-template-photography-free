import { GrowthJob } from "./growth-job";
import { GrowthTray } from "./growth-tray";
import { Slot } from "./slot";
import { Tower } from "./tower";

export class StaticDataFactory {
  public build(): Tower[] {
    const tower1Slots: Slot[] = [
      new Slot(1, new GrowthTray("GT A1", new GrowthJob("Basil", 10))),
      new Slot(2, new GrowthTray("GT A2", new GrowthJob("Rocket", 20))),
      new Slot(3, new GrowthTray("GT A3", new GrowthJob("Tomato", 0))),
      new Slot(4, new GrowthTray("GT A4", new GrowthJob("Strawberry", 100))),
      new Slot(5, new GrowthTray("GT A5", new GrowthJob("Basil", 99))),
      new Slot(6, new GrowthTray("GT A6", new GrowthJob("Strawberry", 15))),
      new Slot(7, new GrowthTray("GT A7", new GrowthJob("Kale", 24))),
      new Slot(8, new GrowthTray("GT A8", new GrowthJob("Lettuce", 30))),
      new Slot(9, new GrowthTray("GT A9", new GrowthJob("Tomato", 13))),
      new Slot(10, new GrowthTray("GT A10", new GrowthJob("Basil", 42)))
    ];

    const tower1 = new Tower(1, tower1Slots);

    const tower2Slots: Slot[] = [
      new Slot(1, new GrowthTray("GT B1", new GrowthJob("Tomato", 1))),
      new Slot(2, null),
      new Slot(3, null),
      new Slot(4, new GrowthTray("GT B4", null)),
      new Slot(5, new GrowthTray("GT B5", null)),
      new Slot(6, new GrowthTray("GT B6", null)),
      new Slot(7, new GrowthTray("GT B7", null)),
      new Slot(8, new GrowthTray("GT B8", new GrowthJob("Tomato", 24))),
      new Slot(9, new GrowthTray("GT B9", new GrowthJob("Tomato", 25))),
      new Slot(10, new GrowthTray("GT B10", new GrowthJob("Tomato", 77)))
    ];

    const tower2 = new Tower(2, tower2Slots);

    return [tower1, tower2];
  }
}
