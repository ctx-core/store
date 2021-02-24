import { Readable } from './readable';
import type { Subscriber } from './Subscriber';
export declare function _readable_set_ctx<Val extends unknown = unknown>(initial: Val): readable_set_ctx_type<Val>;
export declare type _readable_set_ctx_set_type<Val extends unknown = unknown> = Subscriber<Val>;
export interface readable_set_ctx_type<Val extends unknown = unknown> {
    store: Readable<Val>;
    set: _readable_set_ctx_set_type<Val>;
}
