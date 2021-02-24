import { set } from './set'
/**
 * Returns a function to set the given store using the value returned by `setter`.
 * This is useful in conjunction with [subscribe](#subscribe).
 */
export function _set_store<Val extends unknown = unknown>(store, setter = (v:Val)=>v):set_store_T<Val> {
	return (val:Val)=>
		set<Val>(store,
			typeof setter === 'function'
			? setter.call(setter, val)
			: setter)
}
export type set_store_T<Val extends unknown = unknown> = (val:Val)=>void
export { _set_store as _set__store }
