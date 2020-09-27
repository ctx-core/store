import type { Readable } from './lib';
import type { ExtractReadableValue } from './ExtractReadableValue';
export declare function get<I extends Readable<unknown>>(store: I): ExtractReadableValue<I, unknown>;
