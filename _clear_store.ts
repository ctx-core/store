import { clear_store } from './clear_store'
/**
 * Returns a function that [clear_store](#clear_store).
 */
export function _clear_store<I>(stores, value: I) {
	return ()=>clear_store<I>(stores, value)
}
export const _clear__store = _clear_store
