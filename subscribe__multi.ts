import { each, map } from '@ctx-core/array'
import { call } from '@ctx-core/function'
import { get } from './get'
import { subscribe } from './subscribe'
/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the a1__store changes.
 * @param {Readable[]} a1__store
 * @param {function} fn
 * @returns {Unsubscriber}
 */
export function subscribe__multi(a1__store, fn) {
	const a1__unsubscribe =
		map(a1__store,
			(store, i)=>subscribe(store,
				$store=>invoke($store, i)
			))
	return ()=>each(a1__unsubscribe, call)
	function invoke($store__i, i) {
		const a1__$store__all =
			map(a1__store,
				(store, j)=>
					(j === i)
					? $store__i
					: get(store)
			)
		fn(a1__$store__all)
	}
}
