import { Readable } from './readable';
import type { Subscriber } from './Subscriber';
export declare function _readable_set_ctx<I extends unknown = unknown>(initial: any): readable_set_ctx_type<I>;
export declare type _readable_set_ctx_set_type<I extends unknown = unknown> = Subscriber<I>;
export interface readable_set_ctx_type<I extends unknown = unknown> {
    store: Readable<I>;
    set: _readable_set_ctx_set_type<I>;
}
