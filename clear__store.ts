import { _a1__wrap } from '@ctx-core/function'
import { each } from '@ctx-core/array'
import { _set__val } from './_set__val'
/**
 * Sets each nowrap__a1__store with val
 * @param {Stores} stores
 * @param val
 */
export function clear__store(stores, val = null) {
	const a1__store = _a1__wrap(stores)
	each(a1__store, _set__val(val))
}