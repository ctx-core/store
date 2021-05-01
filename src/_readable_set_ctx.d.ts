import { Readable, readable } from './readable';
import type { Subscriber } from './Subscriber';
export declare function _readable_set_ctx<Val extends unknown = unknown>(initial: Val, readable_fn?: typeof readable): readable_set_ctx_T<Val>;
export declare type _readable_set_ctx_set_T<Val extends unknown = unknown> = Subscriber<Val>;
export interface readable_set_ctx_T<Val extends unknown = unknown> {
    store: Readable<Val>;
    set: _readable_set_ctx_set_T<Val>;
}
