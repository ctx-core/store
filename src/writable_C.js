export class writable_C {
    constructor(store) {
        this.store = store;
        this.subscribe = this.store.subscribe;
        this.set = this.store.set;
        this.update = this.store.update;
    }
}
//# sourceMappingURL=src/writable_C.js.map