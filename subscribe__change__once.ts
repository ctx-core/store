import { subscribe__noinit } from './subscribe__noinit'
import type { Readable } from './lib'
import type { Subscriber } from './Subscriber'
/**
 * Calls the given fn the next time the value of the store changes, then unsubscribes.
 */
export function subscribe__change__once<I extends unknown>(
	store: Readable<I>, fn: Subscriber<I>
) {
	const unsubscribe = subscribe__noinit<I>(store, (value=>{
		const out = fn(value)
		unsubscribe()
		return out
	}) as Subscriber<I>)
	return unsubscribe
}
