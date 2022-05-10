import { name } from "./names.ts";

interface Creep {
  name: string;
  parts: BodyPartConstant[];
}

type Spawn = (
  fromSpawn: StructureSpawn,
  parts: Creep["parts"],
) => Creep | ScreepsReturnCode;
const spawnCreep: Spawn = (fromSpawn, parts) => {
  const creep = {
    name: name(parts),
    parts,
  };
  const result = fromSpawn.spawnCreep(creep.parts, creep.name);
  if (result === OK) {
    return creep;
  }
  return result;
};
const success = (result: ReturnType<Spawn>): result is Creep => {
  return typeof result === "object";
};

export type { Creep };
export { spawnCreep, success };
