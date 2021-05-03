import type { Readable } from 'svelte/store'
import type { ExtractReadableValue } from './ExtractReadableValue'
export function subscribe_wait<Val extends unknown = unknown, Store extends Readable<Val> = Readable<Val>>(
	store:Store,
	condition_fn = (val:Val)=>!!val
) {
	return new Promise<Val>(resolve=>{
		let unsubscribe:()=>void, unsubscribe_oninit = false
		unsubscribe = store.subscribe(val=>{
			if (condition_fn(val as ExtractReadableValue<Store>)) {
				if (unsubscribe) unsubscribe()
				else unsubscribe_oninit = true
				resolve(val as ExtractReadableValue<Store>)
			}
		})
		if (unsubscribe_oninit) unsubscribe()
	})
}
export {
	subscribe_wait as subscribe_wait_for,
	subscribe_wait as wait_for__subscribe
}
