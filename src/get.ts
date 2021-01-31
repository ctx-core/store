import { get as in_get } from 'svelte/store'
import type { Readable } from './readable'
import type { ExtractReadableValue } from './ExtractReadableValue'
export function get<I extends unknown>(store:Readable<I>) {
	return in_get<I>(store) as ExtractReadableValue<Readable<I>>
}
