import { _spread } from '@ctx-core/array'
import { derived } from './lib'
import type { Stores } from './Stores'
export function derived__spread<S extends Stores<unknown>, T>(stores: S, fn, initial_value?) {
	return derived<S, T>(stores, _spread(fn), initial_value)
}
