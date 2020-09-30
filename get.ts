import { get as in_get } from 'svelte/store'
import type { Readable } from './readable'
import type { ExtractReadableValue } from './ExtractReadableValue'
export function get<I extends unknown, J extends Readable<I>>(store:J) {
	return in_get<I, J>(store) as ExtractReadableValue<J>
}
