import type { Readable } from './readable';
import type { ExtractReadableValue } from './ExtractReadableValue';
export declare function get<I extends Readable<unknown>>(store: I): ExtractReadableValue<I, unknown>;
