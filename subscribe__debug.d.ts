/**
 * Logs (console.debug) changes to a store
 * @param {Readable} store
 * @param {string} label
 * @returns {function(): Unsubscriber}
 */
export declare function subscribe__debug<T>(store: any, label: any): () => void;
