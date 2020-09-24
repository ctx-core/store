import { _wrap_a1 } from '@ctx-core/function'
import { each } from '@ctx-core/array'
import type { Writable } from './lib'
/**
 * Sets each store with val
 */
export function clear_store<I extends unknown = unknown>(
	stores:Writable<I>|Writable<I>[], val:I
) {
	const store_a1 = _wrap_a1<Writable<I>>(stores)
	each(store_a1, (store:Writable<I>)=>store.set(val))
}
export const clear__store = clear_store
