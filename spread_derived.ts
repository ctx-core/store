import { _spread } from '@ctx-core/array'
import { derived, Readable } from './lib'
import type { Stores } from './Stores'
export function spread_derived<I extends Stores<unknown>, O extends unknown>(
	stores: I, fn, initial_value?
) {
	return derived<I, O>(stores, _spread(fn), initial_value) as Readable<O>
}
export const derived__spread = spread_derived
