class TimeLimitedCache {
    private obj: Record<number, number>
    private timeouts: Record<number, NodeJS.Timeout>

    constructor() {
        this.obj = {}
        this.timeouts = {}
    }
    
    set(key: number, value: number, duration: number): boolean {
        let isExisted = key in this.obj

        if (isExisted) {
            clearTimeout(this.timeouts[key])
        }
            
        this.obj[key] = value

        this.timeouts[key] = setTimeout(() => {
            delete this.obj[key]
            delete this.timeouts[key]
        }, duration)

        return isExisted
    }
    
    get(key: number): number {
        return key in this.obj ? this.obj[key] : -1
    }
    
    count(): number {
        return Object.keys(this.obj).length
    }
}