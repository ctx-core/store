import { Readable } from 'svelte/store'
import { subscribe } from './subscribe'
export function wait_for__subscribe<T=any>(store: Readable<T>, condition_fn = val=>val) {
	return new Promise(resolve=>{
		const unsubscribe = subscribe<T>(store, val=>{
			if (condition_fn(val)) {
				setTimeout(() => unsubscribe())
				resolve(val)
			}
		})
	})
}
