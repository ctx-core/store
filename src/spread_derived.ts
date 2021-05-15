import { _spread } from '@ctx-core/array'
import type { Readable } from './readable'
import type { Stores } from './Stores'
import { derived, derived_in_fn_type } from './derived'
export function spread_derived<Store extends Stores<unknown>, Val extends unknown>(
	stores:Store, fn:derived_in_fn_type<Store, Val>, initial_value?:Val
) {
	return derived<Store, Val>(
		stores,
		_spread(fn) as derived_in_fn_type<Store, Val>,
		initial_value
	) as Readable<Val>
}
export { spread_derived as derived__spread }
