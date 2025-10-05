// Debounce function with callback function and timeout passed as parameters
export default function debounce (callback: () => void, wait: number): () => void {
    let timeoutId: number | undefined = undefined;
    return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            callback(...args)
        }, wait);
    }
}
