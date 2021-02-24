import { Readable } from './readable';
import type { Stores } from './Stores';
import type { Subscriber } from './Subscriber';
/**
 * Creates a Readable store that derives it's value from a async function.
 * @see store_derived
 */
export declare function async_derived<Val extends unknown = unknown>(in_stores: Stores<Val>, fn: (values: Val | Val[], set: Subscriber<Val>) => Promise<Val>, initial_value: Val): Readable<Val>;
export { async_derived as derived__async };
