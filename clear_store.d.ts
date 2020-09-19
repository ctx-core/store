import type { Writable } from './lib';
/**
 * Sets each store with val
 */
export declare function clear_store<I>(stores: Writable<I>[], val: I): void;
export declare const clear__store: typeof clear_store;
