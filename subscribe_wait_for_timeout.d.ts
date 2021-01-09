import type { ExtractReadableValue } from './ExtractReadableValue';
import type { Readable } from './readable';
export declare function subscribe_wait_for_timeout<S extends Readable<unknown>>(store: S, condition_fn: ((val: ExtractReadableValue<S>) => boolean) | undefined, timeout: number): Promise<ExtractReadableValue<S, unknown>>;
