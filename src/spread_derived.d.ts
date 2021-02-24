import type { Readable } from './readable';
import type { Stores } from './Stores';
export declare function spread_derived<Store extends Stores<unknown>, Val extends unknown>(stores: Store, fn: any, initial_value?: any): Readable<Val>;
export { spread_derived as derived__spread };
