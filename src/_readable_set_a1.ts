import type { maybe_undefined } from '@ctx-core/function'
import { Readable, readable } from './readable'
import { get } from './get'
import type { StartStopNotifier } from './StartStopNotifier'
import type { Subscriber } from './Subscriber'
export function _readable_set_a1<Val extends unknown = unknown>(
	initial:Val, readable_fn = readable
):_readable_set_a1_T<Val> {
	let set = undefined as maybe_undefined<_readable_set_a1_set_T<Val>>
	const store = readable_fn<Val>(initial, (in_set=>{
		set = in_set
	}) as StartStopNotifier<Val>) as Readable<Val>
	get(store)
	return [store, set as _readable_set_a1_set_T<Val>]
}
export type _readable_set_a1_set_T<Val extends unknown = unknown> = Subscriber<Val>
export type _readable_set_a1_T<Val extends unknown = unknown> = [Readable<Val>, _readable_set_a1_set_T<Val>]
