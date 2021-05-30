import { subscribe } from './subscribe'
import type { Readable } from './readable'
import type { Unsubscriber } from './Unsubscriber'
import type { Subscriber } from './Subscriber'
/**
 * Subscribes the run to store but does not have the initial call.
 */
export function noinit_subscribe<Val extends unknown = unknown>(
	store: Readable<Val>, run: Subscriber<Val>
):Unsubscriber {
	let beyond_init = false
	return subscribe<Val>(store, (...arg_a)=>{
		if (!beyond_init) {
			beyond_init = true
			return
		}
		return run(...arg_a)
	}) as Unsubscriber
}
export { noinit_subscribe as subscribe__noinit }
