import { set } from './set'
/**
 * Returns a function to set the given store using the value returned by `setter`.
 * This is useful in conjunction with [subscribe](#subscribe).
 */
export function _set_store<I extends unknown = unknown>(store, setter = (v:I)=>v) {
	return (val: I)=>
		set<I>(store,
			typeof setter === 'function'
			? setter.call(setter, val)
			: setter)
}
export const _set__store = _set_store
