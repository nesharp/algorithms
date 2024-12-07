declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

export {};
