import { Readable, readable } from './lib'
import { get } from './get'
import type { maybe_undefined } from '@ctx-core/function'
import type { StartStopNotifier } from './StartStopNotifier'
import type { Subscriber } from './Subscriber'
export function _readable_set_ctx<I extends unknown>(initial) {
	let set = undefined as maybe_undefined<_readable_set_ctx_set_type<I>>
	const store = readable<I>(initial, (in_set=>{
		set = in_set
	}) as StartStopNotifier<I>) as Readable<I>
	get(store)
	return {
		store,
		set,
	} as readable_set_ctx_type<I>
}
export type _readable_set_ctx_set_type<I extends unknown> = Subscriber<I>
export type readable_set_ctx_type<I extends unknown> = {
	store: Readable<I>
	set: _readable_set_ctx_set_type<I>
}