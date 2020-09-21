import type { writable_stores_type } from './writable_stores_type';
import type { writable_stores_val_type } from './writable_stores_val_type';
/**
 * Sets each store with val
 */
export declare function clear_store<I extends writable_stores_type<unknown>>(stores: I, val: writable_stores_val_type<I>): void;
export declare const clear__store: typeof clear_store;
