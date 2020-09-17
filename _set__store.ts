import { set } from './set'
/**
 * Returns a function to set the given store using the value returned by `setter`.
 * This is useful in conjunction with [subscribe](#subscribe).
 */
export function _set__store<I = unknown>(store, setter = (v:I)=>v) {
	return (...a1__arg)=>
		set<I>(store,
			typeof setter === 'function'
			? setter.apply(setter, a1__arg)
			: setter)
}
