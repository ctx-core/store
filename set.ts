/**
 * Calls set on the given store with the given val
 * @param {Writable} store
 * @param val
 * @returns {void}
 */
import type { Writable } from 'svelte/store'
export function set<T>(store: Writable<T>, val) {
	store.set(val)
}
