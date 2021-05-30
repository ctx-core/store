import { clear_store } from './clear_store'
import type { Writable } from './writable'
/**
 * Returns a function that [clear_store](#clear_store).
 */
export function clear_store_<Val extends unknown = unknown>(
	stores:Writable<Val>|Writable<Val>[], value:Val
):clear_store_T {
	return ()=>clear_store<Val>(stores, value)
}
export type clear_store_T = ()=>void
export {
	clear_store_ as _clear_store,
	clear_store_ as _clear__store,
}
