import type { Readable } from './lib';
import type { readable_stores_val_type } from './readable_stores_val_type';
export declare function get<I extends unknown, J extends Readable<I> = Readable<I>>(store: J): readable_stores_val_type<J>;
