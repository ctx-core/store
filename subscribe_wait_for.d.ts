import type { Readable } from 'svelte/store';
import type { readable_infer_type } from './readable_infer_type';
export declare function subscribe_wait_for<S extends Readable<unknown>>(store: S, condition_fn?: (val: readable_infer_type<S>) => boolean): Promise<readable_infer_type<S>>;
export declare const wait_for__subscribe: typeof subscribe_wait_for;
