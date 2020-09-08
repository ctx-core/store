import { Readable } from 'svelte/store'
export function subscribe_wait_for<T>(store:Readable<T>, condition_fn:(T)=>any = (val:T)=>val) {
	return new Promise<T>(resolve=>{
		let unsubscribe:()=>void, unsubscribe_oninit:boolean
		unsubscribe = store.subscribe((val:T)=>{
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