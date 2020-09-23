import { clear_store } from './clear_store'
import type { Writable } from './lib'
/**
 * Returns a function that [clear_store](#clear_store).
 */
export function _clear_store<I extends unknown>(
	stores:Writable<I>|Writable<I>[], value: I
) {
	return ()=>clear_store<I>(stores, value)
}
export const _clear__store = _clear_store
