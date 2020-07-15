import { subscribe } from './subscribe'
export function subscribe__wait_for(store, condition_fn = val=>val) {
	return new Promise(resolve=>{
		const unsubscribe = subscribe(store, val=>{
			if (condition_fn(val)) {
				unsubscribe()
				resolve(val)
			}
		})
	})
}
