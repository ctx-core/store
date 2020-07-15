import { Writable } from 'svelte/store';
export interface Storable<T> extends Writable<T> {
    remove?(): void;
}
/**
 * Tracks storage both in `localStorage` and in svelte's `writable` stores
 * Usage: `const name = storable('name', 'jimmy')`
 * @param {string} key        - `localStorage` key
 * @param {*} value        - default/initial value (if value is already set in `localStorage`, it will load that value instead)
 * @param {Function} fn        - handed off to `writable`
 * @returns {Writable}
 */
export declare function storable(key: any, value: any, fn: any): Storable<any>;
