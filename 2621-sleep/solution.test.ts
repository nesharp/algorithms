import { sleep } from "./solution";

jest.useFakeTimers();

describe("sleep function", () => {
  it("should resolve after the given time", async () => {
    const millis = 1000;
    const promise = sleep(millis);

    // Fast-forward time
    jest.advanceTimersByTime(millis);

    await expect(promise).resolves.toBeUndefined();
  });

  it("should resolve correctly without throwing errors", async () => {
    const millis = 500;
    const promise = sleep(millis);

    // Fast-forward time
    jest.advanceTimersByTime(millis);

    await expect(promise).resolves.not.toThrow();
  });

  it("should not resolve before the specified time", async () => {
    const millis = 2000;
    const promise = sleep(millis);

    jest.advanceTimersByTime(millis - 500);

    await expect(Promise.race([promise, Promise.resolve("still pending")]))
      .resolves.toBe("still pending");

    jest.advanceTimersByTime(500);

    await expect(promise).resolves.toBeUndefined();
  });
});
