import { readable } from './readable';
import { get } from './get';
export function readable_set_ctx_(initial, readable_fn = readable) {
    let set = undefined;
    const store = readable_fn(initial, (in_set => {
        set = in_set;
    }));
    get(store);
    return {
        store,
        set,
    };
}
export { readable_set_ctx_ as _readable_set_ctx, };
//# sourceMappingURL=src/readable_set_ctx_.js.map