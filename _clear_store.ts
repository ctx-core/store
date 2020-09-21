import { clear_store } from './clear_store'
import type { writable_stores_val_type } from './writable_stores_val_type'
import type { writable_stores_type } from './writable_stores_type'
/**
 * Returns a function that [clear_store](#clear_store).
 */
export function _clear_store<I extends writable_stores_type<unknown>>(
	stores:I, value: writable_stores_val_type<I>
) {
	return ()=>clear_store<I>(stores, value)
}
export const _clear__store = _clear_store
