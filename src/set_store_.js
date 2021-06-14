import { set } from './set';
/**
 * Returns a function to set the given store using the value returned by `setter`.
 * This is useful in conjunction with [subscribe](#subscribe).
 */
export function set_store_(store, setter = (v) => v) {
    return (val) => set(store, typeof setter === 'function'
        ? setter.call(setter, val)
        : setter);
}
export { set_store_ as _set_store, set_store_ as _set__store, };
//# sourceMappingURL=src/set_store_.js.map