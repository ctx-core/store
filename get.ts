import { get as in_get } from 'svelte/store'
import type { Readable } from './lib'
import type { extract_readable_val_type } from './extract_readable_val_type'
export function get<I extends Readable<unknown>>(
	store:I
) {
	return in_get(store) as extract_readable_val_type<I>
}
