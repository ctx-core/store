import type { Readable } from 'svelte/store'
import type { readable_infer_type } from './readable_infer_type'
export function subscribe_wait_for<S extends Readable<unknown>>(
	store:S,
	condition_fn = (val:readable_infer_type<S>)=>!!val
) {
	return new Promise<readable_infer_type<S>>(resolve=>{
		let unsubscribe:()=>void, unsubscribe_oninit = false
		unsubscribe = store.subscribe(val=>{
			if (condition_fn(val as readable_infer_type<S>)) {
				if (unsubscribe) unsubscribe()
				else unsubscribe_oninit = true
				resolve(val as readable_infer_type<S>)
			}
		})
		if (unsubscribe_oninit) unsubscribe()
	})
}
export const wait_for__subscribe = subscribe_wait_for
