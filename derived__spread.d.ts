import { Readable } from 'svelte/store';
import { Stores } from './Stores';
/**
 * Spreads the first argument into the fn.
 * @param {Stores} stores
 * @param {function} fn
 * @returns {Readable}
 * @see nowrap__a1
 */
export declare function derived__spread<S extends Stores, T>(stores: [Readable<any>, ...Readable<any>[]], fn: any, initial_value?: any): Readable<T>;
