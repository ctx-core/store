/**
 * Returns a function to set the given store using the value returned by `setter`.
 * This is useful in conjunction with [subscribe](#subscribe).
 */
export declare function _set__store<I = unknown>(store: any, setter?: (v: I) => I): (...a1__arg: any[]) => void;
