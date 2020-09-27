import type { Readable } from './lib';
import type { extract_readable_val_type } from './extract_readable_val_type';
export declare function get<I extends Readable<unknown>>(store: I): extract_readable_val_type<I>;
