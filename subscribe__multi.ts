import { each, map } from '@ctx-core/array'
import { call } from '@ctx-core/function'
import { get } from './get'
import { subscribe } from './subscribe'
import type { Readable } from './lib'
/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the store_a1 changes.
 */
export function subscribe__multi<I = unknown>(
	store_a1:Readable<I>[],
	fn:((store_a1:Readable<I>[])=>void)
) {
	const unsubscribe_a1 =
		map(store_a1,
			(store, i)=>subscribe<I>(store,
				$store=>invoke($store, i)
			))
	return ()=>each(unsubscribe_a1, call)
	function invoke($i_store, i) {
		const all_$store_a1 =
			map(store_a1,
				(store, j)=>
					(j === i)
					? $i_store
					: get(store)
			)
		fn(all_$store_a1)
	}
}
