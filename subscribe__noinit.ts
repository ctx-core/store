import { subscribe } from './subscribe'
/**
 * Subscribes the fn to store but does not have the initial call.
 * @param {Readable} store
 * @param {function} fn
 * @returns {function: void}
 */
export function subscribe__noinit<T>(store, fn) {
	let beyond_init = false
	return subscribe<T>(store, (...a1__arg)=>{
		if (!beyond_init) {
			beyond_init = true
			return
		}
		// @ts-ignore
		return fn(...a1__arg)
	})
}
