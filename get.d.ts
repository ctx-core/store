import type { Readable } from './readable';
import type { ExtractReadableValue } from './ExtractReadableValue';
export declare function get<I extends unknown, J extends Readable<I>>(store: J): ExtractReadableValue<J, unknown>;
