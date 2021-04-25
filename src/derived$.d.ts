import { Readable$ } from './readable$';
import { derived_in_fn_type } from './derived';
import type { Stores } from './Stores';
export declare function derived$<Store extends Stores, Val extends unknown = unknown>(stores: Store, in_fn: derived_in_fn_type<Store, Val>, initial_value?: Val): Readable$<Val>;
