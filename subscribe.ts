import type { Readable } from 'svelte/store'
/**
 * Delegates to store.subscribe
 * @param {Readable} store
 * @param {function} run
 * @param {function} [invalidate]
 * @returns {Unsubscriber}
 */
export function subscribe<T>(
	store:Readable<T>,
	run:(T)=>void,
	invalidate?:(T)=>void
) {
	return store.subscribe(run, invalidate)
}
