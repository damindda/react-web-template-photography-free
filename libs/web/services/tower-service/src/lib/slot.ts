import { GrowthTray } from "./growth-tray";


export class Slot {
  constructor(public number: number, public growthTray: GrowthTray | null) {
  }
}
