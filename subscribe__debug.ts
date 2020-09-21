import { subscribe } from './subscribe'
import type { Readable } from './lib'
/**
 * Logs (console.debug) changes to a store
 */
export function subscribe__debug<I extends unknown>(
	store: Readable<I>, label: string
) {
	try {
		return subscribe<I>(store, value=>{
			console.debug(label, value)
		})
	} catch (err) {
		console.error(`Error: ${label}`)
		throw err
	}
}
