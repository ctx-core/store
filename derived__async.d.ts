/**
 * Creates a Readable store that derives it's value from a async function.
 * @param {Stores} stores
 * @param {function:Promise} fn
 * @param initial_value
 * @returns {Readable}
 * @see derived__store
 */
export declare function derived__async<I>(stores: any, fn: any, initial_value?: null): import("svelte/store").Readable<null>;
