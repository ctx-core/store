import type { Readable } from './readable'
import type { Stores } from './Stores'
import { _spread } from '@ctx-core/array'
import { derived } from './derived'
export function spread_derived<Store extends Stores<unknown>, Val extends unknown>(
	stores:Store, fn, initial_value?
) {
	return derived<Store, Val>(stores, _spread(fn), initial_value) as Readable<Val>
}
export { spread_derived as derived__spread }
