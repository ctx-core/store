import { Readable } from 'svelte/store';
/**
 * Delegates to store.subscribe
 * @param {Readable} store
 * @param {function} run
 * @param {function} [invalidate]
 * @returns {Unsubscriber}
 */
export declare function subscribe(store: Readable<any>, run: (any: any) => void, invalidate?: (any: any) => void): () => void;
