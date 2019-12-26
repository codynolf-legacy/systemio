export function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function randomNumber(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}