import { subscribe } from './subscribe'
/**
 * Logs (console.debug) changes to a store
 * @param {Readable} store
 * @param {string} label
 * @returns {function(): Unsubscriber}
 */
export function subscribe__debug(store, label) {
	try {
		return subscribe(store, value=>{
			console.debug(label, value)
		})
	} catch (err) {
		console.error(`Error: ${label}`)
		throw err
	}
}
