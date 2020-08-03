import { Readable } from 'svelte/store'
export function wait_for__subscribe<T>(store: Readable<T>, condition_fn: (T)=>any = (val:T)=>val) {
	return new Promise<T>(resolve=>{
		let unsubscribe: () => void
		unsubscribe = store.subscribe((val:T)=>{
			if (condition_fn(val)) {
				if (unsubscribe) unsubscribe();
				else setTimeout(() => unsubscribe())
				resolve(val)
			}
		})
	})
}
