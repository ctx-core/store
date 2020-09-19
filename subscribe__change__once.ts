import { subscribe__noinit } from './subscribe__noinit'
/**
 * Calls the given fn the next time the value of the store changes, then unsubscribes.
 * @param {Readable} store
 * @param {function} fn
 * @returns {Unsubscriber}
 */
export function subscribe__change__once<T>(store, fn) {
	const unsubscribe = subscribe__noinit<T>(store, (...arg_a1)=>{
		// @ts-ignore
		const __ = fn(...arg_a1)
		unsubscribe()
		return __
	})
	return unsubscribe
}
