import type { Readable } from 'svelte/store';
import type { ExtractReadableValue } from './ExtractReadableValue';
export declare function subscribe_wait<S extends Readable<unknown>>(store: S, condition_fn?: (val: ExtractReadableValue<S>) => boolean): Promise<ExtractReadableValue<S, unknown>>;
export { subscribe_wait as subscribe_wait_for, subscribe_wait as wait_for__subscribe };
