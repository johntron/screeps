import { HarvestEnergy } from "./harvest-energy.ts";
import { Spawn } from "./spawn.ts";

interface Strategy {
  toString: () => string;
  onTick: () => void;
}

export type { Strategy };
export { HarvestEnergy, Spawn };
