import type { maybe_undefined } from '@ctx-core/function'
import { Readable, readable } from './readable'
import { get } from './get'
import type { StartStopNotifier } from './StartStopNotifier'
import type { Subscriber } from './Subscriber'
export function _readable_set_ctx<Val extends unknown = unknown>(
	initial:Val, readable_fn = readable
):readable_set_ctx_T<Val> {
	let set = undefined as maybe_undefined<_readable_set_ctx_set_T<Val>>
	const store = readable_fn<Val>(initial, (in_set=>{
		set = in_set
	}) as StartStopNotifier<Val>) as Readable<Val>
	get(store)
	return {
		store,
		set,
	} as readable_set_ctx_T<Val>
}
export type _readable_set_ctx_set_T<Val extends unknown = unknown> = Subscriber<Val>
export interface readable_set_ctx_T<Val extends unknown = unknown> {
	store:Readable<Val>
	set:_readable_set_ctx_set_T<Val>
}
