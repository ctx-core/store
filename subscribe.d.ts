import type { Readable } from 'svelte/store';
/**
 * Delegates to store.subscribe
 * @param {Readable} store
 * @param {function} run
 * @param {function} [invalidate]
 * @returns {Unsubscriber}
 */
export declare function subscribe<I>(store: Readable<I>, run: (I: any) => void, invalidate?: (I: any) => void): () => void;
