/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the store_a1 changes.
 * @param {Readable[]} store_a1
 * @param {function} fn
 * @returns {Unsubscriber}
 */
export declare function subscribe__multi(store_a1: any, fn: any): () => any[];
