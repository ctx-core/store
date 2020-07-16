import { I } from '@ctx-core/combinators'
import { set } from './set'
/**
 * Returns a function to set the given store using the value returned by `__`.
 * This is useful in conjunction with [subscribe](#subscribe).
 * @param {Writable} store
 * @param {Function|*} __ - function return value or value to set the given store
 * @returns {function(...[*]): void}
 */
export function _set__store<T>(store, __ = I) {
	return (...a1__arg)=>
		set<T>(store,
			typeof __ === 'function'
				// @ts-ignore
			? __.apply(__, a1__arg)
			: __)
}
