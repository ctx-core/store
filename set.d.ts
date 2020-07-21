/**
 * Calls set on the given store with the given val
 * @param {Writable} store
 * @param val
 * @returns {void}
 */
import { Writable } from 'svelte/store';
export declare function set<T>(store: Writable<T>, val: any): void;
