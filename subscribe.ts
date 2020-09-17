import type { Readable } from 'svelte/store'
/**
 * Delegates to store.subscribe
 * @param {Readable} store
 * @param {function} run
 * @param {function} [invalidate]
 * @returns {Unsubscriber}
 */
export function subscribe<I = unknown>(
	store:Readable<I>,
	run:(I)=>void,
	invalidate?:(I)=>void
) {
	return store.subscribe(run, invalidate)
}
