import { Strategy } from "./index.ts";

class HarvestEnergy implements Strategy {
  public toString() {
    return "Harvest";
  }
  public onTick() {}
}

export { HarvestEnergy };
