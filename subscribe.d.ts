import type { Readable } from 'svelte/store';
/**
 * Delegates to store.subscribe
 * @param {Readable} store
 * @param {function} run
 * @param {function} [invalidate]
 * @returns {Unsubscriber}
 */
export declare function subscribe<T>(store: Readable<T>, run: (T: any) => void, invalidate?: (T: any) => void): () => void;
