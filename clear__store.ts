import { _a1__wrap } from '@ctx-core/function'
import { each } from '@ctx-core/array'
import { _set__val } from './_set__val'
import { Stores } from './Stores'
/**
 * Sets each nowrap__a1__store with val
 * @param {Stores} stores
 * @param val
 */
export function clear__store<S extends Stores>(stores: S, val = null) {
	const store_a1 = _a1__wrap(stores)
	each(store_a1, _set__val(val))
}
