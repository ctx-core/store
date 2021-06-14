import { writable } from './writable';
import { mix_set_readable$ } from './mix_set_readable$';
export function writable$(value, start) {
    const store = writable(value, start);
    return mix_writable$(store);
}
export function mix_writable$(store) {
    return mix_set_readable$(store);
}
//# sourceMappingURL=src/writable$.js.map