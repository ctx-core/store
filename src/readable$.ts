import { get } from './get'
import type { Readable } from './readable'
import type { StartStopNotifier } from './StartStopNotifier'
import { readable } from './readable'
export function readable$<Val extends unknown = unknown>(
	value:Val, start:StartStopNotifier<Val>
):Readable$<Val> {
	const store = readable<Val>(value, start)
	return mix_readable$(store)
}
export function mix_readable$<Val extends unknown = unknown>(
	store:Readable<Val>
):Readable$<Val> {
	Object.defineProperties(store, Object.getOwnPropertyDescriptors({
		get $() {
			return get(store)
		}
	}))
	return store as Readable$<Val>
}
export interface Readable$<Val extends unknown = unknown> extends Readable<Val> {
	readonly $:Val
}
