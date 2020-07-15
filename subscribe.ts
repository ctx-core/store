import { Readable } from 'svelte/store'
/**
 * Delegates to store.subscribe
 * @param {Readable} store
 * @param {function} run
 * @param {function} [invalidate]
 * @returns {Unsubscriber}
 */
export function subscribe(
	store:Readable<any>,
	run:(any)=>void,
	invalidate?:(any)=>void
) {
	return store.subscribe(run, invalidate)
}
