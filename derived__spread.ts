import { Readable } from 'svelte/store'
import { _spread } from '@ctx-core/array'
import { derived } from './derived'
import { Stores } from './Stores'
/**
 * Spreads the first argument into the fn.
 * @param {Stores} stores
 * @param {function} fn
 * @returns {Readable}
 * @see nowrap__a1
 */
export function derived__spread<S extends Stores, T>(stores:[Readable<any>, ...Readable<any>[]], fn, initial_value?) {
	return derived<S, T>(stores, _spread(fn), initial_value)
}
