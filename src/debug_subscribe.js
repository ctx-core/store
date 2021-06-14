import { subscribe } from './subscribe';
/**
 * Logs (console.debug) changes to a store
 */
export function debug_subscribe(store, label) {
    try {
        return subscribe(store, value => {
            console.debug(label, value);
        });
    }
    catch (err) {
        console.error(`Error: ${label}`);
        throw err;
    }
}
export { debug_subscribe as subscribe__debug };
//# sourceMappingURL=src/debug_subscribe.js.map