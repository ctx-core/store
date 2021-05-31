import { Readable, readable } from './readable'
import { get } from './get'
import type { StartStopNotifier } from './StartStopNotifier'
import type { Subscriber } from './Subscriber'
export function readable_set_ctx_<Val extends unknown = unknown>(
	initial:Val, readable_fn = readable
):readable_set_ctx_T<Val> {
	let set = undefined as readable_set_ctx$_T<Val>|undefined
	const store = readable_fn<Val>(initial, (in_set=>{
		set = in_set
	}) as StartStopNotifier<Val>) as Readable<Val>
	get(store)
	return {
		store,
		set,
	} as readable_set_ctx_T<Val>
}
export type readable_set_ctx$_T<Val extends unknown = unknown> = Subscriber<Val>
export interface readable_set_ctx_T<Val extends unknown = unknown> {
	store:Readable<Val>
	set:readable_set_ctx$_T<Val>
}
export {
	readable_set_ctx_ as _readable_set_ctx,
}
