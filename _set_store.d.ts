/**
 * Returns a function to set the given store using the value returned by `setter`.
 * This is useful in conjunction with [subscribe](#subscribe).
 */
export declare function _set_store<I>(store: any, setter?: (v: I) => I): (val: I) => void;
export declare const _set__store: typeof _set_store;
