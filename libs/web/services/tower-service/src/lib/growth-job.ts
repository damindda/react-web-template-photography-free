
export class GrowthJob {
  private readonly maxPercentage = 100;
  private readonly incrementStep = 10;

  constructor(public name: string, public progressPercentage: number) {
  }

  public increment() {
    if (this.progressPercentage + this.incrementStep >= this.maxPercentage) {
      this.progressPercentage = this.maxPercentage;
    } else {
      this.progressPercentage = this.progressPercentage + this.incrementStep;
    }
  }

  public isFinished(): boolean {
    return this.progressPercentage >= this.maxPercentage;
  }
}
