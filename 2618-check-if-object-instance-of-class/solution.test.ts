import { checkIfInstanceOf } from "./solution";

describe("checkIfInstanceOf", () => {
  test("should return true for an instance of the same class", () => {
    expect(checkIfInstanceOf(new Date(), Date)).toBe(true);
    expect(checkIfInstanceOf([], Array)).toBe(true);
    expect(checkIfInstanceOf({}, Object)).toBe(true);
  });

  test("should return false for a null or undefined object", () => {
    expect(checkIfInstanceOf(null, Date)).toBe(false);
    expect(checkIfInstanceOf(undefined, Date)).toBe(false);
  });

  test("should return false if classFunction is not a function", () => {
    expect(checkIfInstanceOf(new Date(), null)).toBe(false);
    expect(checkIfInstanceOf(new Date(), {})).toBe(false);
    expect(checkIfInstanceOf(new Date(), "String")).toBe(false);
  });

  test("should return false for an object not matching the class", () => {
    expect(checkIfInstanceOf(new Date(), Array)).toBe(false);
    expect(checkIfInstanceOf([], Date)).toBe(false);
    expect(checkIfInstanceOf({}, Array)).toBe(false);
  });

  test("should handle primitive types correctly", () => {
    expect(checkIfInstanceOf(123, Number)).toBe(true);
    expect(checkIfInstanceOf("test", String)).toBe(true);
    expect(checkIfInstanceOf(true, Boolean)).toBe(true);

    expect(checkIfInstanceOf(123, String)).toBe(false);
    expect(checkIfInstanceOf("test", Number)).toBe(false);
    expect(checkIfInstanceOf(true, Object)).toBe(true);
  });

  test("should work with custom classes", () => {
    class MyClass {}
    const instance = new MyClass();
    expect(checkIfInstanceOf(instance, MyClass)).toBe(true);
    expect(checkIfInstanceOf({}, MyClass)).toBe(false);
  });

  test("should handle inherited classes", () => {
    class Parent {}
    class Child extends Parent {}
    const childInstance = new Child();
    expect(checkIfInstanceOf(childInstance, Child)).toBe(true);
    expect(checkIfInstanceOf(childInstance, Parent)).toBe(true);
  });
});
