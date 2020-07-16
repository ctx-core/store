import { clear__store } from './clear__store'
import { Stores } from './Stores'
/**
 * Returns a function that [clear__store](#clear__store).
 * @param {Stores} stores
 * @param value
 * @returns {function(): void}
 */
export function _clear__store<S extends Stores>(stores, value = null) {
	return ()=>clear__store<S>(stores, value)
}
