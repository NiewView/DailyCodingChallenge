import { minimumNumberOfRooms } from "./main";

describe("minimumNumberOfRooms", () => {
  test("check for 1 and 2 climbs", () => {
    expect(minimumNumberOfRooms(5, [1, 3, 5])).toBe(5);
  });
});
