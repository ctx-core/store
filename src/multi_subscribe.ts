import { each, map } from '@ctx-core/array'
import { get } from './get'
import { subscribe } from './subscribe'
import type { Unsubscriber } from './Unsubscriber'
import type { Readable } from './readable'
/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the store_a1 changes.
 */
export function multi_subscribe<Val extends unknown, Store extends Readable<any> = Readable<any>>(
	store_a1:Store[],
	fn:(($store_a1:Val[])=>void)
):Unsubscriber {
	const unsubscribe_a1 =
		map<Readable<Val>, Unsubscriber>(store_a1,
			(store, i)=>subscribe(
				store,
				($store:Val)=>invoke($store, i)
			))
	return ()=>each<Unsubscriber>(unsubscribe_a1, unsubscribe=>unsubscribe())
	function invoke($i_store:Val, i:number) {
		const all_$store_a1 =
			map(store_a1,
				(store, j)=>
					(j === i)
					? $i_store
					: get(store)
			) as Val[]
		fn(all_$store_a1)
	}
}
export { multi_subscribe as subscribe__multi }
