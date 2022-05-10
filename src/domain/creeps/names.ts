const name = (parts: BodyPartConstant[]) => {
  const baseName = parts.join("-");
  let i = 0;
  let potentialName = `${baseName}-${i}`;
  while (Game.creeps[potentialName] !== undefined) {
    i += 1;
    potentialName = `${baseName}-${i}`;
  }
  return potentialName;
};

export { name };
