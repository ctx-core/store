import { subscribe } from './subscribe'
/**
 * Logs (console.debug) changes to a store
 * @param {Readable} store
 * @param {string} label
 * @returns {function(): Unsubscriber}
 */
export function subscribe__debug<T>(store, label) {
	try {
		return subscribe<T>(store, value=>{
			console.debug(label, value)
		})
	} catch (err) {
		console.error(`Error: ${label}`)
		throw err
	}
}
