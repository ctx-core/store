/**
 * Returns a function to set the given store using the value returned by `setter`.
 * This is useful in conjunction with [subscribe](#subscribe).
 */
export declare function _set_store<I extends unknown = unknown>(store: any, setter?: (v: I) => I): (val: I) => void;
export { _set_store as _set__store };
