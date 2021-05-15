import type { Writable } from './writable';
/**
 * Returns a function to set the given store using the value returned by `setter`.
 * This is useful in conjunction with [subscribe](#subscribe).
 */
export declare function _set_store<Val extends unknown = unknown>(store: Writable<Val>, setter?: (v: Val) => Val): set_store_T<Val>;
export declare type set_store_T<Val extends unknown = unknown> = (val: Val) => void;
export { _set_store as _set__store };
