import { subscribe__noinit } from './subscribe__noinit'
/**
 * Calls the given fn the next time the value of the store changes, then unsubscribes.
 * @param {Readable} store
 * @param {function} fn
 * @returns {Unsubscriber}
 */
export function subscribe__change__once(store, fn) {
	const unsubscribe = subscribe__noinit(store, (...a1__arg)=>{
		// @ts-ignore
		const __ = fn(...a1__arg)
		unsubscribe()
		return __
	})
	return unsubscribe
}
