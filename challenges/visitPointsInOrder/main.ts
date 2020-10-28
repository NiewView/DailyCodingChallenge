export function visitPointsInOrder(
  points: Array<[number, number]> = [[0, 0]]
): number {
  let steps = 0;
  if (points.length <= 1) {
    return 0;
  }
  let currentPosition = points[0];
  for (let i = 1; i < points.length; i++) {
    const xDif = Math.abs(currentPosition[0] - points[i][0]);
    const yDif = Math.abs(currentPosition[1] - points[i][1]);
    steps += Math.max(xDif, yDif);
    currentPosition = points[i];
  }
  return steps;
}
