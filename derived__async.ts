import { readable } from 'svelte/store'
import { each } from '@ctx-core/array'
import { subscribe } from './subscribe'
import type { Unsubscriber } from './Unsubscriber'
import type { Stores } from './Stores'
import type { Readable } from './lib'
/**
 * Creates a Readable store that derives it's value from a async function.
 * @see derived__store
 */
export function derived__async<I>(in_stores:Stores<I>, fn, initial_value = null) {
	const single = !Array.isArray(in_stores)
	const stores = (single ? [in_stores] : in_stores) as Readable<I>[]
	const auto = fn.length < 2
	let value = {}
	return readable(initial_value, set=>{
		let inited = false
		const values = [] as I[]
		let pending = 0
		// @ts-ignore
		async function sync():Promise<void> {
			if (pending) return
			const result = await fn(single ? values[0] : values, set)
			if (auto && (value !== (value = result))) set(result)
		}
		const unsubscribers = stores.map((store, i)=>
			subscribe(
				store,
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
