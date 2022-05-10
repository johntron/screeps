import { spawnCreep, success } from "../creeps/creep.ts";
import { Strategy } from "./index.ts";
import { logger } from "../../logger.ts";

class Spawn implements Strategy {
  public toString() {
    return "Spawn";
  }
  public onTick() {
    const creep = spawnCreep(Game.spawns.Spawn1, [WORK, CARRY, MOVE]);
    if (!success(creep)) {
      logger.error(`Failed to spawn creep! Return code: ${creep}`);
    }
  }
}

export { Spawn };
