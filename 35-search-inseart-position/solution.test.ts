import { searchInsert } from "./solution";

describe("searchInsert", () => {
  test("returns correct index when target is present in the array", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  test("returns the index where the target would be inserted in a sorted array", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  test("returns the correct index when target is greater than all elements", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });

  test("returns the correct index when target is smaller than all elements", () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });

  test("works with an empty array", () => {
    expect(searchInsert([], 5)).toBe(0);
  });

  test("returns correct index when array has only one element", () => {
    expect(searchInsert([10], 5)).toBe(0);
    expect(searchInsert([10], 15)).toBe(1);
  });
});
