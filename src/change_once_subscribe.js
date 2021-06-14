import { noinit_subscribe } from './noinit_subscribe';
/**
 * Calls the given fn the next time the value of the store changes, then unsubscribes.
 */
export function change_once_subscribe(store, fn) {
    const unsubscribe = noinit_subscribe(store, (value => {
        const out = fn(value);
        unsubscribe();
        return out;
    }));
    return unsubscribe;
}
export { change_once_subscribe as subscribe__change__once };
//# sourceMappingURL=src/change_once_subscribe.js.map