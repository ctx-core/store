import type { Writable } from './writable';
/**
 * Sets each store with val
 */
export declare function clear_store<I extends unknown = unknown>(stores: Writable<I> | Writable<I>[], val: I): void;
export { clear_store as clear__store };
