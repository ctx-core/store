import { readable } from './readable';
import type { readable_set_ctx_T } from './_readable_set_ctx';
import { Readable$ } from './readable$';
export declare function _readable_set_ctx$<Val extends unknown = unknown>(initial: Val, readable_fn?: typeof readable): readable_set_ctx_T$<Val>;
export interface readable_set_ctx_T$<Val extends unknown = unknown> extends readable_set_ctx_T<Val> {
    store: Readable$<Val>;
}
