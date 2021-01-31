import { Readable } from './readable';
import type { Stores } from './Stores';
import type { Subscriber } from './Subscriber';
/**
 * Creates a Readable store that derives it's value from a async function.
 * @see store_derived
 */
export declare function async_derived<I extends unknown = unknown>(in_stores: Stores<I>, fn: (values: I | I[], set: Subscriber<I>) => Promise<I>, initial_value: I): Readable<I>;
export { async_derived as derived__async };
