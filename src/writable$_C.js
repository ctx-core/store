import { readable$_C } from './readable$_C';
import { get } from './get';
export class writable$_C extends readable$_C {
    constructor(store) {
        super(store);
        this.store = store;
        this.set = this.store.set;
        this.update = this.store.update;
    }
    get $() { return get(this.store); }
    set $(val) { this.store.set(val); }
    get _() { return get(this.store); }
    set _(val) { this.store.set(val); }
}
//# sourceMappingURL=src/writable$_C.js.map