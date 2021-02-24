import { get as in_get } from 'svelte/store'
import type { Readable } from './readable'
import type { ExtractReadableValue } from './ExtractReadableValue'
export function get<Val extends unknown = unknown>(store:Readable<Val>) {
	return in_get<Val>(store) as ExtractReadableValue<Readable<Val>>
}
