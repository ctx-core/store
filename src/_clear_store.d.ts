import type { Writable } from './writable';
/**
 * Returns a function that [clear_store](#clear_store).
 */
export declare function _clear_store<Val extends unknown = unknown>(stores: Writable<Val> | Writable<Val>[], value: Val): clear_store_T;
export declare type clear_store_T = () => void;
export { _clear_store as _clear__store };
