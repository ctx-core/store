import { subscribe } from './subscribe'
import type { Readable } from './readable'
import type { Unsubscriber } from './Unsubscriber'
/**
 * Logs (console.debug) changes to a store
 */
export function debug_subscribe<I extends unknown = unknown>(
	store: Readable<I>, label: string
) {
	try {
		return (
			subscribe<I>(store, value => {
				console.debug(label, value)
			}) as Unsubscriber
		)
	} catch (err) {
		console.error(`Error: ${label}`)
		throw err
	}
}
export { debug_subscribe as subscribe__debug }
