/**
 * Calls set on the given store with the given val
 * @param {Writable} store
 * @param val
 * @returns {void}
 */
import type { Writable } from 'svelte/store';
export declare function set<I>(store: Writable<I>, val: any): void;
