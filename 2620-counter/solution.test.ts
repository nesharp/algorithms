import { createCounter } from "./solution";

describe("createCounter", () => {
    test("should return a function that increments and returns the counter", () => {
        const counter = createCounter(10);

        expect(counter()).toBe(10);
        expect(counter()).toBe(11);
        expect(counter()).toBe(12);
    });

    test("should maintain independent counters", () => {
        const counterA = createCounter(5);
        const counterB = createCounter(100);

        expect(counterA()).toBe(5);
        expect(counterA()).toBe(6);

        expect(counterB()).toBe(100);
        expect(counterB()).toBe(101);
    });

    test("should work with a negative initial value", () => {
        const counter = createCounter(-3);

        expect(counter()).toBe(-3);
        expect(counter()).toBe(-2);
        expect(counter()).toBe(-1);
    });

    test("should work with zero as the initial value", () => {
        const counter = createCounter(0);

        expect(counter()).toBe(0);
        expect(counter()).toBe(1);
        expect(counter()).toBe(2);
    });
});
