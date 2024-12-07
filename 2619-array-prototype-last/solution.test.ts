import "./solution.js";
describe("Array.prototype.last", () => {
  // Ensure the method exists
  test("should be defined on Array.prototype", () => {
    expect(typeof Array.prototype.last).toBe("function");
  });

  // Test with a non-empty array
  test("should return the last element of a non-empty array", () => {
    const arr = [1, 2, 3];
    expect(arr.last()).toBe(3);
  });

  // Test with a single-element array
  test("should return the only element in a single-element array", () => {
    const arr = [42];
    expect(arr.last()).toBe(42);
  });

  // Test with an empty array
  test("should return -1 for an empty array", () => {
    const arr: Array<null> = [];
    expect(arr.last()).toBe(-1);
  });

  // Test with an array of strings
  test("should return the last string in an array of strings", () => {
    const arr = ["apple", "banana", "cherry"];
    expect(arr.last()).toBe("cherry");
  });

  // Test with an array of mixed types
  test("should return the last element in a mixed-type array", () => {
    const arr = [true, 10, "hello", null];
    expect(arr.last()).toBe(null);
  });

  // Test with an array of objects
  test("should return the last object in an array of objects", () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const arr = [obj1, obj2];
    expect(arr.last()).toBe(obj2);
  });

  // Test immutability
  test("should not modify the original array", () => {
    const arr = [1, 2, 3];
    arr.last();
    expect(arr).toEqual([1, 2, 3]);
  });

  // Test with nested arrays
  test("should return the last nested array", () => {
    const arr = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    expect(arr.last()).toEqual([5, 6]);
  });
});
