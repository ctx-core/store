import { readable } from './readable';
import type { readable_set_ctx_T } from './readable_set_ctx_';
import { Readable$ } from './readable$';
export declare function readable$_set_ctx_<Val extends unknown = unknown>(initial: Val, readable_fn?: typeof readable): readable$_set_ctx__T<Val>;
export interface readable$_set_ctx__T<Val extends unknown = unknown> extends readable_set_ctx_T<Val> {
    store: Readable$<Val>;
}
export { readable$_set_ctx_ as _readable_set_ctx$, };
