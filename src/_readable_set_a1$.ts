import { readable } from './readable'
import { _readable_set_a1, _readable_set_a1_set_T } from './_readable_set_a1'
import { mix_readable$, Readable$ } from './readable$'
export function _readable_set_a1$<Val extends unknown = unknown>(
	initial:Val, readable_fn = readable
):_readable_set_a1$_T<Val> {
	const [store, set] = _readable_set_a1(initial, readable_fn)
	const store$ = mix_readable$(store)
	return [store$, set]
}
export type _readable_set_a1$_T<Val extends unknown = unknown> = [Readable$<Val>, _readable_set_a1_set_T<Val>]
