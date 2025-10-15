// Debounce function with callback function and timeout passed as parameters
export default function debounce (
    callback: (value: string) => void,
    value: string,
    wait: number
) {
    let timeoutId: number | undefined = undefined;
    return () => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(
            () => callback(value), 
            wait
        );
    }
}
