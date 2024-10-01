import { quicksort } from "./solution";

describe("quicksort", () => {
  test("sorts an array of numbers", () => {
    expect(quicksort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
      1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
    ]);
  });

  test("sorts an empty array", () => {
    expect(quicksort([])).toEqual([]);
  });

  test("sorts an array with one element", () => {
    expect(quicksort([1])).toEqual([1]);
  });

  test("sorts an array with two elements", () => {
    expect(quicksort([2, 1])).toEqual([1, 2]);
  });
});
