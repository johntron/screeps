import { Strategy } from "./strategy/index.ts";

type Controller = (strategy: Strategy) => () => void;
const controller: Controller = (strategy: Strategy) => {
  const onTick = () => {
    // Automatically delete memory of missing creeps
    for (const name in Memory.creeps) {
      if (!(name in Game.creeps)) {
        delete Memory.creeps[name];
      }
    }

    strategy.onTick();
  };
  return onTick;
};

export { controller };
