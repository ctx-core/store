import type { Readable } from './readable';
import type { Stores } from './Stores';
import { derived_in_fn_type } from './derived';
export declare function spread_derived<Store extends Stores<unknown>, Val extends unknown>(stores: Store, fn: derived_in_fn_type<Store, Val>, initial_value?: Val): Readable<Val>;
export { spread_derived as derived__spread };
