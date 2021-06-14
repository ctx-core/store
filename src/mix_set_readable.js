import { assign } from '@ctx-core/object';
import { get } from './get';
export function mix_set_readable(store, set) {
    return assign(store, {
        set,
        update(updater) {
            set(updater(get(store)));
        }
    });
}
export class mix_set_readable_C {
    constructor(store) {
        this.store = store;
        this.subscribe = this.store.subscribe;
        this.set = this.store.set;
        this.update = this.store.update;
    }
}
//# sourceMappingURL=src/mix_set_readable.js.map