import { get } from './get';
import { mix_set_readable } from './mix_set_readable';
export function mix_set_readable$(store, set) {
    if (set) {
        mix_set_readable(store, set);
    }
    const mix_set_readable_store = store;
    if (!mix_set_readable_store.set) {
        throw `There must be a set function argument or store must have a set method`;
    }
    Object.defineProperties(mix_set_readable_store, Object.getOwnPropertyDescriptors({
        get $() {
            return get(store);
        },
        set $(val) {
            mix_set_readable_store.set(val);
        },
        get _() {
            return get(store);
        },
        set _(val) {
            mix_set_readable_store.set(val);
        },
    }));
    return mix_set_readable_store;
}
export class mix_set_readable$_C {
    constructor(store) {
        this.store = store;
        this.subscribe = this.store.subscribe;
        this.set = this.store.set;
        this.update = this.store.update;
        this.$ = this.store.$;
        this._ = this.store._;
    }
}
//# sourceMappingURL=src/mix_set_readable$.js.map