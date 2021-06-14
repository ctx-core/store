import { readable } from './readable';
import { readable_set_ctx_ } from './readable_set_ctx_';
import { mix_readable$ } from './readable$';
export function readable$_set_ctx_(initial, readable_fn = readable) {
    const { store, set } = readable_set_ctx_(initial, readable_fn);
    const store$ = mix_readable$(store);
    return { store: store$, set };
}
export { readable$_set_ctx_ as _readable_set_ctx$, };
//# sourceMappingURL=src/readable$_set_ctx_.js.map