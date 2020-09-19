import { _wrap_a1 } from '@ctx-core/function'
import { each } from '@ctx-core/array'
import type { Writable } from './lib'
/**
 * Sets each store with val
 */
export function clear_store<I>(stores: Writable<I>[], val: I) {
	const store_a1 = _wrap_a1(stores)
	each(store_a1, store => store.set(val))
}
export const clear__store = clear_store
