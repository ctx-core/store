import type { Readable } from 'svelte/store'
export function subscribe_wait_for<I>(store:Readable<I>, condition_fn = (val:I)=>!!val) {
	return new Promise<I>(resolve=>{
		let unsubscribe:()=>void, unsubscribe_oninit = false
		unsubscribe = store.subscribe((val:I)=>{
			if (condition_fn(val)) {
				if (unsubscribe) unsubscribe()
				else unsubscribe_oninit = true
				resolve(val)
			}
		})
		if (unsubscribe_oninit) unsubscribe()
	})
}
export const wait_for__subscribe = subscribe_wait_for
