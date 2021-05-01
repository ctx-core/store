import { readable } from './readable'
import type { readable_set_ctx_T } from './_readable_set_ctx'
import { _readable_set_ctx } from './_readable_set_ctx'
import { mix_readable$, Readable$ } from './readable$'
export function _readable_set_ctx$<Val extends unknown = unknown>(
	initial:Val, readable_fn = readable
):readable_set_ctx_T$<Val> {
	const { store, set } = _readable_set_ctx(initial, readable_fn)
	const store$ = mix_readable$(store)
	return { store: store$, set }
}
export interface readable_set_ctx_T$<Val extends unknown = unknown> extends readable_set_ctx_T<Val> {
	store:Readable$<Val>
}
