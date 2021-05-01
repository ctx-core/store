import { readable } from './readable';
import { _readable_set_a1_set_T } from './_readable_set_a1';
import { Readable$ } from './readable$';
export declare function _readable_set_a1$<Val extends unknown = unknown>(initial: Val, readable_fn?: typeof readable): _readable_set_a1$_T<Val>;
export declare type _readable_set_a1$_T<Val extends unknown = unknown> = [Readable$<Val>, _readable_set_a1_set_T<Val>];
