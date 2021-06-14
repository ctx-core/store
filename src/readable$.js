import { get } from './get';
import { readable } from './readable';
export function readable$(value, start) {
    const store = readable(value, start);
    return mix_readable$(store);
}
export function mix_readable$(store) {
    Object.defineProperties(store, Object.getOwnPropertyDescriptors({
        get $() { return get(store); },
        get _() { return get(store); },
    }));
    return store;
}
//# sourceMappingURL=src/readable$.js.map