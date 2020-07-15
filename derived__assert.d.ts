import { Stores } from './Stores';
/**
 * Asserts fn is a function then creates a derived stores
 * @param {Stores} stores
 * @param {function} fn
 * @returns {Readable}
 */
export declare function derived__assert<S extends Stores, T>(stores: any, fn: any, initial_value?: any): import("svelte/store").Readable<T>;
