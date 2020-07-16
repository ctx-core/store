import { each, map } from '@ctx-core/array'
import { call } from '@ctx-core/function'
import { get } from './get'
import { subscribe } from './subscribe'
/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the store_a1 changes.
 * @param {Readable[]} store_a1
 * @param {function} fn
 * @returns {Unsubscriber}
 */
export function subscribe__multi(store_a1, fn) {
	const a1__unsubscribe =
		map(store_a1,
			(store, i)=>subscribe(store,
				$store=>invoke($store, i)
			))
	return ()=>each(a1__unsubscribe, call)
	function invoke($store__i, i) {
		const a1__$store__all =
			map(store_a1,
				(store, j)=>
					(j === i)
					? $store__i
					: get(store)
			)
		fn(a1__$store__all)
	}
}
