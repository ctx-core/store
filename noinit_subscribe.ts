import { subscribe } from './subscribe'
import type { Readable } from './readable'
import type { Unsubscriber } from './Unsubscriber'
/**
 * Subscribes the fn to store but does not have the initial call.
 */
export function noinit_subscribe<I extends unknown = unknown>(
	store: Readable<I>, fn
) {
	let beyond_init = false
	return subscribe<I>(store, (...arg_a1)=>{
		if (!beyond_init) {
			beyond_init = true
			return
		}
		return fn(...arg_a1)
	}) as Unsubscriber
}
export { noinit_subscribe as subscribe__noinit }
