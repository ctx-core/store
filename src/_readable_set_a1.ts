import type { maybe_undefined } from '@ctx-core/function'
import { Readable, readable } from './readable'
import { get } from './get'
import type { StartStopNotifier } from './StartStopNotifier'
import type { Subscriber } from './Subscriber'
export function _readable_set_a1<Val extends unknown = unknown>(initial:Val):[Readable<Val>, _readable_set_a1_set_type<Val>] {
	let set = undefined as maybe_undefined<_readable_set_a1_set_type<Val>>
	const store = readable<Val>(initial, (in_set=>{
		set = in_set
	}) as StartStopNotifier<Val>) as Readable<Val>
	get(store)
	return [store, set as _readable_set_a1_set_type<Val>]
}
export type _readable_set_a1_set_type<Val extends unknown = unknown> = Subscriber<Val>
