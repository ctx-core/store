import { Readable, readable } from './readable';
import type { Subscriber } from './Subscriber';
export declare function _readable_set_a1<Val extends unknown = unknown>(initial: Val, readable_fn?: typeof readable): _readable_set_a1_T<Val>;
export declare type _readable_set_a1_set_T<Val extends unknown = unknown> = Subscriber<Val>;
export declare type _readable_set_a1_T<Val extends unknown = unknown> = [Readable<Val>, _readable_set_a1_set_T<Val>];
