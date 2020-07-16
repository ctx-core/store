import { Readable } from 'svelte/store'
import { subscribe } from './subscribe'
export function wait_for__subscribe<T>(store: Readable<T>, condition_fn = val=>val) {
	return new Promise<T>(resolve=>{
		const unsubscribe = subscribe<T>(store, (val:T)=>{
			if (condition_fn(val)) {
				setTimeout(() => unsubscribe())
				resolve(val)
			}
		})
	})
}
