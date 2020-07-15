import { clear__store } from './clear__store'
/**
 * Returns a function that [clear__store](#clear__store).
 * @param {Stores} stores
 * @param value
 * @returns {function(): void}
 */
export function _clear__store(stores, value = null) {
	return ()=>clear__store(stores, value)
}
