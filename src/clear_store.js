import { wrap_a_ } from '@ctx-core/function';
import { each } from '@ctx-core/array';
/**
 * Sets each store with val
 */
export function clear_store(stores, val) {
    const store_a = wrap_a_(stores);
    each(store_a, (store) => store.set(val));
}
export { clear_store as clear__store };
//# sourceMappingURL=src/clear_store.js.map