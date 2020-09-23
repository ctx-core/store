import { Readable } from './lib';
import type { Subscriber } from './Subscriber';
export declare function _readable_set_ctx<I extends unknown>(initial: any): readable_set_ctx_type<I>;
export declare type _readable_set_ctx_set_type<I extends unknown> = Subscriber<I>;
export declare type readable_set_ctx_type<I extends unknown> = {
    store: Readable<I>;
    set: _readable_set_ctx_set_type<I>;
};
