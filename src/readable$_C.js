import { get } from './get';
export class readable$_C {
    constructor(store) {
        this.store = store;
        this.subscribe = this.store.subscribe;
    }
    get $() { return get(this.store); }
    get _() { return get(this.store); }
}
//# sourceMappingURL=src/readable$_C.js.map