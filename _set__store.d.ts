/**
 * Returns a function to set the given store using the value returned by `__`.
 * This is useful in conjunction with [subscribe](#subscribe).
 * @param {Writable} store
 * @param {Function|*} __ - function return value or value to set the given store
 * @returns {function(...[*]): void}
 */
export declare function _set__store<T>(store: any, __?: (x: any) => any): (...a1__arg: any[]) => void;
