import { TimeLimitedCache } from "./solution";

jest.useFakeTimers();

describe("TimeLimitedCache", () => {
    let cache: TimeLimitedCache;

    beforeEach(() => {
        cache = new TimeLimitedCache();
    });

    test("set() should return false if the key is new", () => {
        expect(cache.set(1, 100, 5000)).toBe(false);
    });

    test("set() should return true if the key already exists", () => {
        cache.set(1, 100, 5000);
        expect(cache.set(1, 200, 5000)).toBe(true);
    });

    test("get() should return the value if the key exists", () => {
        cache.set(1, 100, 5000);
        expect(cache.get(1)).toBe(100);
    });

    test("get() should return -1 if the key does not exist", () => {
        expect(cache.get(2)).toBe(-1);
    });

    test("count() should return the number of active keys", () => {
        cache.set(1, 100, 5000);
        cache.set(2, 200, 5000);
        expect(cache.count()).toBe(2);
    });

    test("count() should decrease after a key expires", () => {
        cache.set(1, 100, 3000);
        cache.set(2, 200, 5000);
        expect(cache.count()).toBe(2);

        jest.advanceTimersByTime(3000);
        expect(cache.count()).toBe(1);

        jest.advanceTimersByTime(2000);
        expect(cache.count()).toBe(0);
    });

    test("get() should return -1 after the key expires", () => {
        cache.set(1, 100, 3000);
        expect(cache.get(1)).toBe(100);
        jest.advanceTimersByTime(3000);
        expect(cache.get(1)).toBe(-1);
    });

    test("resetting the timer should keep the key alive", () => {
        cache.set(1, 100, 3000);
        jest.advanceTimersByTime(2000);
        cache.set(1, 200, 3000);
        jest.advanceTimersByTime(2000);
        expect(cache.get(1)).toBe(200);
    });
});