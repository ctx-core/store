import type { writable_stores_val_type } from './writable_stores_val_type';
import type { writable_stores_type } from './writable_stores_type';
/**
 * Returns a function that [clear_store](#clear_store).
 */
export declare function _clear_store<I extends writable_stores_type<unknown>>(stores: I, value: writable_stores_val_type<I>): () => void;
export declare const _clear__store: typeof _clear_store;
