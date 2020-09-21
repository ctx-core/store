import type { Readable } from './lib'
import type { Subscriber } from './Subscriber'
import type { Invalidator } from './Invalidator'
import type { Unsubscriber } from './Unsubscriber'
/**
 * Delegates to store.subscribe
 */
export function subscribe<I extends unknown>(
	store:Readable<I>,
	run:Subscriber<I>,
	invalidate?:Invalidator<I>
) {
	return store.subscribe(run, invalidate) as Unsubscriber
}
