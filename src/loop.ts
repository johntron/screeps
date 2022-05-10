import { logger } from "./logger.ts";
import { controller as gameController } from "./domain/game-controller.ts";
import { Spawn as SpawnStrategy } from "./domain/strategy/index.ts";
// import "./global-types";

const loop = () => {
  console.log(`Current game tick is ${Game.time}`);

  const strategy = new SpawnStrategy();
  const onTick = gameController(strategy);
  onTick();

  logger.info(`CPU used: ${Game.cpu.getUsed()}`);
};

export {
  loop
}