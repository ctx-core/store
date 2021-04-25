import { assign } from '@ctx-core/object'
import { get } from './get'
import type { Readable } from './readable'
import type { StartStopNotifier } from './StartStopNotifier'
import { readable } from './readable'
export function readable$<Val extends unknown = unknown>(
	value: Val, start: StartStopNotifier<Val>
):Readable$<Val> {
  const store = readable<Val>(value, start)
	return mix_readable_$(store)
}
export function mix_readable_$<Val extends unknown = unknown>(
	store:Readable<Val>
):Readable$<Val> {
  return assign(store, {
		get $() {
			return get(store)
		}
	})
}
export interface Readable$<Val extends unknown = unknown> extends Readable<Val> {
  readonly $:Val
}
