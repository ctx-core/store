import { readable } from './readable'
import { readable_set_a_, readable_set_a__set_T } from './readable_set_a_'
import { mix_readable$, Readable$ } from './readable$'
export function readable_set_a_$<Val extends unknown = unknown>(
	initial:Val, readable_ = readable
):readable_set_a_$_T<Val> {
	const [store, set] = readable_set_a_(initial, readable_)
	const store$ = mix_readable$(store)
	return [store$, set]
}
export type readable_set_a_$_T<Val extends unknown = unknown> = [Readable$<Val>, readable_set_a__set_T<Val>]
export {
	readable_set_a_$ as readable_set_a1_$,
	readable_set_a_$ as _readable_set_a1$,
}
