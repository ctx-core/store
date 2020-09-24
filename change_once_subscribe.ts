import { noinit_subscribe } from './noinit_subscribe'
import type { Readable } from './lib'
import type { Subscriber } from './Subscriber'
import type { Unsubscriber } from './Unsubscriber'
/**
 * Calls the given fn the next time the value of the store changes, then unsubscribes.
 */
export function change_once_subscribe<I extends unknown = unknown>(
	store: Readable<I>, fn: Subscriber<I>
): Unsubscriber {
	const unsubscribe = noinit_subscribe<I>(store, (value=>{
		const out = fn(value)
		unsubscribe()
		return out
	}) as Subscriber<I>) as Unsubscriber
	return unsubscribe
}
export const subscribe__change__once = change_once_subscribe
