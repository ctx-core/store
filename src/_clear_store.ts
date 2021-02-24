import { clear_store } from './clear_store'
import type { Writable } from './writable'
/**
 * Returns a function that [clear_store](#clear_store).
 */
export function _clear_store<Val extends unknown = unknown>(
	stores:Writable<Val>|Writable<Val>[], value:Val
):clear_store_T {
	return ()=>clear_store<Val>(stores, value)
}
export type clear_store_T = ()=>void
export { _clear_store as _clear__store }
