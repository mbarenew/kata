// If two temperatures are equally close to zero, then the positive temperature must be returned. For example, if the temperatures are -5 and 5, then return 5.
function computeClosestToZero(ts: number[]): number {
  if (ts.length === 0) {
    return 0;
  }
  let closest = ts[0];
  for (let i = 1; i < ts.length; i++) {
    if (Math.abs(ts[i]) < Math.abs(closest)) {
      closest = ts[i];
    } else if (Math.abs(ts[i]) === Math.abs(closest)) {
      if (ts[i] > closest) {
        closest = ts[i];
      }
    }
  }
  return closest;
}
