export class TimeLimitedCache {
    cache: Map<number, { value: number, timeout: NodeJS.Timeout }> = new Map(); 

    constructor() {}

    set(key: number, value: number, duration: number): boolean {
        if (this.cache.has(key)) {
            clearTimeout(this.cache.get(key)!.timeout);
            this.cache.set(key, { value, timeout: setTimeout(() => this.cache.delete(key), duration) });
            return true;
        }
        this.cache.set(key, { value, timeout: setTimeout(() => this.cache.delete(key), duration) });
        return false;
    }

    get(key: number): number {
        return this.cache.get(key)?.value || -1; 
    }

    count(): number {
        return this.cache.size; 
    }
}
