import { each, wrap_a1_type } from '@ctx-core/array'
import { readable, Readable } from './readable'
import { subscribe } from './subscribe'
import type { Unsubscriber } from './Unsubscriber'
import type { Stores } from './Stores'
import type { Subscriber } from './Subscriber'
/**
 * Creates a Readable store that derives it's value from a async function.
 * @see store_derived
 */
export function async_derived<Val extends unknown = unknown>(
	in_stores:Stores<Val>,
	fn:(
		values:Val|Val[],
		set:Subscriber<Val>
	)=>Promise<Val>,
	initial_value:Val
):Readable<Val> {
	const single = !Array.isArray(in_stores)
	const stores = (single ? [in_stores] : in_stores) as wrap_a1_type<Val>
	const auto = fn.length < 2
	let value:Val
	return readable(initial_value, set=>{
		let inited = false
		const values = [] as Val[]
		let pending = 0
		async function sync():Promise<void> {
			if (pending) return
			const result = await fn(single ? values[0] : values, set)
			if (auto && (value !== (value = result))) set(result)
		}
		const unsubscribers = stores.map((store, i)=>
			subscribe<Val>(
				store as Readable<Val>,
				value=>{
					values[i] = value
					pending &= ~(1 << i)
					if (inited) sync().then()
				},
				()=>{
					pending |= (1 << i)
				})
		)
		inited = true
		sync().then()
		return function stop() {
			each<Unsubscriber>(unsubscribers, unsubscribe=>unsubscribe())
		}
	})
}
export { async_derived as derived__async }
