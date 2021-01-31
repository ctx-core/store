import type { Writable } from './writable';
/**
 * Returns a function that [clear_store](#clear_store).
 */
export declare function _clear_store<I extends unknown = unknown>(stores: Writable<I> | Writable<I>[], value: I): () => void;
export { _clear_store as _clear__store };
