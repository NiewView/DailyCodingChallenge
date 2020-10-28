import { visitPointsInOrder } from "./main";

describe("staircases", () => {
  test("check if [[0,0],[1,1],[1,2]] results in 2 steps", () => {
    expect(
      visitPointsInOrder([
        [0, 0],
        [1, 1],
        [1, 2],
      ])
    ).toBe(2);
  });

  test("check if [[3,6],[1,1],[4,2]] results in 8 steps", () => {
    expect(
      visitPointsInOrder([
        [3, 6],
        [1, 1],
        [4, 2],
      ])
    ).toBe(8);
  });

  test("check if [[3,6],[1,1]] results in 5 steps", () => {
    expect(
      visitPointsInOrder([
        [3, 6],
        [1, 1],
      ])
    ).toBe(5);
  });
  test("check if [[3,6],[1,1],[1,1]] results in 5 steps", () => {
    expect(
      visitPointsInOrder([
        [3, 6],
        [1, 1],
        [1, 1],
      ])
    ).toBe(5);
  });
  test("check if [[3,2],[1,-4],[1,1]] results in 5 steps", () => {
    expect(
      visitPointsInOrder([
        [3, 2],
        [1, -4],
        [1, 1],
      ])
    ).toBe(11);
  });
  test("check if [[3,6],[1,2],[9,3],[5,2]] results in ", () => {
    expect(
      visitPointsInOrder([
        [3, 6],
        [1, 2],
        [9, 3],
        [5, 2],
      ])
    ).toBe(16);
  });
});
