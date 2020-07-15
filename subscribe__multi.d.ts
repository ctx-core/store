/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the a1__store changes.
 * @param {Readable[]} a1__store
 * @param {function} fn
 * @returns {Unsubscriber}
 */
export declare function subscribe__multi(a1__store: any, fn: any): () => any[];
