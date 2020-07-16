/**
 * Calls the given fn the next time the value of the store changes, then unsubscribes.
 * @param {Readable} store
 * @param {function} fn
 * @returns {Unsubscriber}
 */
export declare function subscribe__change__once<T>(store: any, fn: any): () => void;
