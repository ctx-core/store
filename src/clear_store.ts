import { wrap_a_ } from '@ctx-core/function'
import { each } from '@ctx-core/array'
import type { Writable } from './writable'
/**
 * Sets each store with val
 */
export function clear_store<Val extends unknown = unknown>(
	stores:Writable<Val>|Writable<Val>[], val:Val
):void {
	const store_a1 = wrap_a_<Writable<Val>>(stores)
	each(store_a1, (store:Writable<Val>)=>store.set(val))
}
export { clear_store as clear__store }
