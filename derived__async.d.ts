import type { Stores } from './Stores';
import type { Readable } from './lib';
import type { Subscriber } from './Subscriber';
/**
 * Creates a Readable store that derives it's value from a async function.
 * @see derived__store
 */
export declare function derived__async<I extends unknown>(in_stores: Stores<I>, fn: (values: I | I[], set: Subscriber<I>) => Promise<I>, initial_value?: I): Readable<I>;
