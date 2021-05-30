import { readable } from './readable'
import type { readable_set_ctx_T } from './readable_set_ctx_'
import { readable_set_ctx_ } from './readable_set_ctx_'
import { mix_readable$, Readable$ } from './readable$'
export function readable_set_ctx_$<Val extends unknown = unknown>(
	initial:Val, readable_fn = readable
):readable_set_ctx_T$<Val> {
	const { store, set } = readable_set_ctx_(initial, readable_fn)
	const store$ = mix_readable$(store)
	return { store: store$, set }
}
export interface readable_set_ctx_T$<Val extends unknown = unknown> extends readable_set_ctx_T<Val> {
	store:Readable$<Val>
}
export {
	readable_set_ctx_$ as _readable_set_ctx$,
}
