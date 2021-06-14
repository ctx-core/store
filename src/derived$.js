import { mix_readable$ } from './readable$';
import { derived } from './derived';
export function derived$(stores, in_fn, initial_value) {
    const store = derived(stores, in_fn, initial_value);
    return mix_readable$(store);
}
//# sourceMappingURL=src/derived$.js.map