import { get as in_get } from 'svelte/store'
import type { Readable } from './lib'
import type { readable_stores_val_type } from './readable_stores_val_type'
export function get<I extends unknown, J extends Readable<I> = Readable<I>>(store: J) {
	return in_get(store as J) as readable_stores_val_type<J>
}
