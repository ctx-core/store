/**
 * Calls set on the given store with the given val
 */
import type { Writable } from 'svelte/store'
export function set<I extends unknown = unknown>(store: Writable<I>, val: I) {
	store.set(val)
}
