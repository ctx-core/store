import { subscribe } from './subscribe'
import type { Readable } from './lib'
/**
 * Subscribes the fn to store but does not have the initial call.
 */
export function subscribe__noinit<I extends unknown>(
	store: Readable<I>, fn
) {
	let beyond_init = false
	return subscribe<I>(store, (...arg_a1)=>{
		if (!beyond_init) {
			beyond_init = true
			return
		}
		return fn(...arg_a1)
	})
}
