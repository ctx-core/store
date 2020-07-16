import { subscribe } from './subscribe'
export function wait_for__subscribe(store, condition_fn = val=>val) {
	return new Promise(resolve=>{
		const unsubscribe = subscribe(store, val=>{
			if (condition_fn(val)) {
				setTimeout(unsubscribe)
				resolve(val)
			}
		})
	})
}
