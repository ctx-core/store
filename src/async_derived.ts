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
export function async_derived<I extends unknown = unknown>(
	in_stores:Stores<I>,
	fn:(
		values:I|I[],
		set:Subscriber<I>
	)=>Promise<I>,
	initial_value:I
) {
	const single = !Array.isArray(in_stores)
	const stores = (single ? [in_stores] : in_stores) as wrap_a1_type<I>
	const auto = fn.length < 2
	let value:I
	return readable(initial_value, set=>{
		let inited = false
		const values = [] as I[]
		let pending = 0
		async function sync():Promise<void> {
			if (pending) return
			const result = await fn(single ? values[0] : values, set)
			if (auto && (value !== (value = result))) set(result)
		}
		const unsubscribers = stores.map((store, i)=>
			subscribe<I>(
				store as Readable<I>,
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
