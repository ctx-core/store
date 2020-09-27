import { get as in_get } from 'svelte/store'
import type { Readable } from './lib'
import type { ExtractReadableValue } from './ExtractReadableValue'
export function get<I extends Readable<unknown>>(
	store:I
) {
	return in_get(store) as ExtractReadableValue<I>
}
