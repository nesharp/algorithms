import { removeElement } from "./solution";
describe("removeElement", () => {
  it("should remove all occurences of the value from the array", () => {
    let nums = [3, 2, 2, 3];
    expect(removeElement(nums, 3)).toBe(2);
    expect(nums).toEqual([2, 2]);

    nums = [0, 1, 2, 2, 3, 0, 4, 2];
    expect(removeElement(nums, 2)).toBe(5);
    expect(nums).toEqual([0, 1, 3, 0, 4]);
  });

  it("should return the length of the array when no values are removed", () => {
    let nums = [1, 2, 3, 4, 5];
    expect(removeElement(nums, 6)).toBe(5); // No change
    expect(nums).toEqual([1, 2, 3, 4, 5]);
  });

  it("should work with an empty array", () => {
    let nums: number[] = [];
    expect(removeElement(nums, 1)).toBe(0); // Array stays empty
    expect(nums).toEqual([]);
  });

  it("should remove all elements if all values match", () => {
    let nums = [1, 1, 1, 1];
    expect(removeElement(nums, 1)).toBe(0); // All elements removed
    expect(nums).toEqual([]);
  });
});
