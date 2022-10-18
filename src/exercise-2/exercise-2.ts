export const isWalkValid = (walk: string[]): boolean => {
  const north = walk.filter((direction) => direction === "n").length;
  const south = walk.filter((direction) => direction === "s").length;
  const east = walk.filter((direction) => direction === "e").length;
  const west = walk.filter((direction) => direction === "w").length;

  return walk.length === 10 && north === south && east === west;
};
