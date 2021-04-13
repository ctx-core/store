import type { Unsubscriber } from 'svelte/store'
import type { Subscriber } from './Subscriber'
import type { Invalidator } from './Invalidator'
import type { Readable } from './readable'
/**
 * Delegates to store.subscribe
 */
export function subscribe<Val extends unknown = unknown>(
	store:Readable<Val>,
	run:Subscriber<Val>,
	invalidate?:Invalidator<Val>
) {
	return store.subscribe(run, invalidate) as Unsubscriber
}
