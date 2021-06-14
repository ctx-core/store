import { readable } from './readable';
import { readable_set_a_ } from './readable_set_a_';
import { mix_readable$ } from './readable$';
export function readable$_set_a_(initial, readable_ = readable) {
    const [store, set] = readable_set_a_(initial, readable_);
    const store$ = mix_readable$(store);
    return [store$, set];
}
export { readable$_set_a_ as readable_set_a1_$, readable$_set_a_ as _readable_set_a1$, };
//# sourceMappingURL=src/readable$_set_a_.js.map