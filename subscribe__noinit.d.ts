/**
 * Subscribes the fn to store but does not have the initial call.
 * @param {Readable} store
 * @param {function} fn
 * @returns {function: void}
 */
export declare function subscribe__noinit<T>(store: any, fn: any): () => void;
