export function minimumNumberOfRooms(
  schedules: Array<[number, number]>
): number {
  // generate bins
  const bins = []
    .concat(...(schedules as any))
    .reduce((a, b) => (((a[b] as any) = 0), a), {});
  // Directly store max number of rooms, so you don't have to search for it afterwards
  let maxNumber = 0;

  schedules.forEach((timeslot) => {
    Object.keys(bins).forEach((bin) => {
      if (timeslot[0] <= Number(bin) && timeslot[1] > Number(bin)) {
        const numberOfRooms = (bins as any)[bin] + 1;
        maxNumber = maxNumber < numberOfRooms ? numberOfRooms : maxNumber;
        (bins as any)[bin] = numberOfRooms;
      }
    });
  });

  return maxNumber;
}
