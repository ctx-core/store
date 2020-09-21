import { _wrap_a1 } from '@ctx-core/function'
import { each } from '@ctx-core/array'
import type { writable_stores_type } from './writable_stores_type'
import type { writable_stores_val_type } from './writable_stores_val_type'
/**
 * Sets each store with val
 */
export function clear_store<I extends writable_stores_type<unknown>>(
	stores:I,
	val: writable_stores_val_type<I>
) {
	const store_a1 = _wrap_a1<I>(stores)
	each(store_a1, store=>store.set(val))
}
export const clear__store = clear_store
