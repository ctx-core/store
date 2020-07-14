import { subscribe } from './lib';
export function subscribe__wait_for(store, condition_fn) {
	return new Promise(resolve => {
		const unsubscribe = subscribe(store, val => {
			if (condition_fn(val)) {
				unsubscribe()
				resolve(val)
			}
		})
	})
}
