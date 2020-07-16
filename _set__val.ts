import { set } from './set'
/**
 * Returns a function to set it's store argument with the given val
 * @param val
 * @returns {function(Writable): void}
 */
export function _set__val<T>(val) {
	return store=>set<T>(store, val)
}
