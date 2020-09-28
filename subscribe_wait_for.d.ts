import type { Readable } from 'svelte/store';
import type { ExtractReadableValue } from './ExtractReadableValue';
export declare function subscribe_wait_for<S extends Readable<unknown>>(store: S, condition_fn?: (val: ExtractReadableValue<S>) => boolean): Promise<ExtractReadableValue<S, unknown>>;
export declare const wait_for__subscribe: typeof subscribe_wait_for;
