// Simple debounce implementation
const debounce = (callback: Function, wait: number) => {
    let timeoutId: NodeJS.Timeout;

    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback.apply(null, args);
        }, wait);
    };
}

export default debounce;
