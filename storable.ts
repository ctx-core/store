import { Writable, writable } from 'svelte/store'
import { subscribe } from './subscribe'
const storage =
	// @ts-ignore
	typeof localStorage !== 'undefined'
		// @ts-ignore
	? localStorage
	: { removeItem: ()=>{}, }
export interface Storable<T> extends Writable<T> {
	remove?():void;
}
/**
 * Tracks storage both in `localStorage` and in svelte's `writable` stores
 * Usage: `const name = storable('name', 'jimmy')`
 * @param {string} key        - `localStorage` key
 * @param {*} value        - default/initial value (if value is already set in `localStorage`, it will load that value instead)
 * @param {Function} fn        - handed off to `writable`
 * @returns {Writable}
 */
export function storable(key, value, fn) {
	key = `cm.store.${key}`
	// @ts-ignore
	if (storage[key]) { value = JSON.parse(storage[key]) }
	const store:Storable<any> = writable(value, fn)
	subscribe(store, value=>{
		if (value === undefined) {
			storage.removeItem(key)
		} else {
			// @ts-ignore
			storage[key] = JSON.stringify(value)
		}
	})
	store.remove = ()=>store.set(undefined)
	return store
}
