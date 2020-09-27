import type { Readable } from './readable'
import type { Stores } from './Stores'
import { _spread } from '@ctx-core/array'
import { derived } from './derived'
export function spread_derived<I extends Stores<unknown>, O extends unknown>(
	stores:I, fn, initial_value?
) {
	return derived<I, O>(stores, _spread(fn), initial_value) as Readable<O>
}
export const derived__spread = spread_derived
