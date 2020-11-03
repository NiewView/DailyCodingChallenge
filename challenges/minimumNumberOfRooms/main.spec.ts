import { minimumNumberOfRooms } from "./main";

describe("minimumNumberOfRooms", () => {
  test("given example", () => {
    expect(
      minimumNumberOfRooms([
        [30, 75],
        [0, 50],
        [60, 150],
      ])
    ).toBe(2);
  });

  test("empty example", () => {
    expect(minimumNumberOfRooms([])).toBe(0);
  });

  test("four rooms example", () => {
    expect(
      minimumNumberOfRooms([
        [30, 75],
        [0, 50],
        [0, 50],
        [40, 65],
        [110, 150],
        [60, 150],
      ])
    ).toBe(4);
  });
});
