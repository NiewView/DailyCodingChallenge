export function minimumNumberOfRooms(
  schedules: Array<[number, number]>
): number {
  // TODO: improve variable naming
  // There are only two hard things in Computer Science: cache invalidation and naming things.
  // -- Phil Karlton
  if (schedules.length === 0) {
    return 0;
  }

  let overlaps: Array<Array<[number, number]>> = [schedules];
  let schedule = overlaps[0].shift();
  while (schedule !== undefined) {
    for (let i = overlaps.length - 1; i >= 0; i--) {
      const overlap = overlaps[i];
      overlap.forEach((item) => {
        if (schedule![0] < item[0] && schedule![1] > item[0]) {
          if (overlaps.length <= i + 1) {
            overlaps.push([]);
          }
          overlaps[i + 1].push([item[0], schedule![1]]);
        }
        if (schedule![0] < item[1] && schedule![1] > item[1]) {
          if (overlaps.length <= i + 1) {
            overlaps.push([]);
          }
          overlaps[i + 1].push([schedule![0], item[1]]);
        }
      });
    }
    schedule = overlaps[0].pop();
  }
  console.log(JSON.stringify(overlaps));
  return overlaps.length - 1;
}
