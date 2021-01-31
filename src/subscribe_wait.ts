import type { Readable } from 'svelte/store'
import type { ExtractReadableValue } from './ExtractReadableValue'
export function subscribe_wait<S extends Readable<unknown>>(
	store:S,
	condition_fn = (val:ExtractReadableValue<S>)=>!!val
) {
	return new Promise<ExtractReadableValue<S>>(resolve=>{
		let unsubscribe:()=>void, unsubscribe_oninit = false
		unsubscribe = store.subscribe(val=>{
			if (condition_fn(val as ExtractReadableValue<S>)) {
				if (unsubscribe) unsubscribe()
				else unsubscribe_oninit = true
				resolve(val as ExtractReadableValue<S>)
			}
		})
		if (unsubscribe_oninit) unsubscribe()
	})
}
export {
	subscribe_wait as subscribe_wait_for,
	subscribe_wait as wait_for__subscribe
}
