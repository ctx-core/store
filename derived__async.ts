import { readable } from 'svelte/store'
import { each } from '@ctx-core/array'
import { subscribe } from './subscribe'
/**
 * Creates a Readable store that derives it's value from a async function.
 * @param {Stores} stores
 * @param {function:Promise} fn
 * @param initial_value
 * @returns {Readable}
 * @see derived__store
 */
export function derived__async(stores, fn, initial_value = null) {
	const single = !Array.isArray(stores)
	if (single) stores = [stores]
	const auto = fn.length < 2
	let value = {}
	return readable(initial_value, set=>{
		let inited = false
		const values = []
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
					if (inited) sync()
				},
				()=>{
					pending |= (1 << i)
				})
		)
		inited = true
		sync()
		return function stop() {
			each(unsubscribers, unsubscribe=>unsubscribe())
		}
	})
}
