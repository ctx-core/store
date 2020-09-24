import { each, map } from '@ctx-core/array'
import { get } from './get'
import { subscribe } from './subscribe'
import type { Unsubscriber } from './Unsubscriber'
import type { Readable } from './lib'
/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the store_a1 changes.
 */
export function multi_subscribe<I extends unknown, J extends Readable<any>>(
	store_a1:J[],
	fn:(($store_a1:I[])=>void)
) {
	const unsubscribe_a1 =
		map<Readable<I>, Unsubscriber>(store_a1,
			(store, i)=>subscribe(
				store,
				$store=>invoke($store, i)
			))
	return ()=>each<Unsubscriber>(unsubscribe_a1, unsubscribe=>unsubscribe())
	function invoke($i_store, i) {
		const all_$store_a1 =
			map(store_a1,
				(store, j)=>
					(j === i)
					? $i_store
					: get<I>(store)
			) as I[]
		fn(all_$store_a1)
	}
}
export const subscribe__multi = multi_subscribe
