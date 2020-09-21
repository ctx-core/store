import type { Stores } from './Stores';
import type { Readable } from './lib';
/**
 * Creates a Readable store that derives it's value from a async function.
 * @see derived__store
 */
export declare function derived__async<I>(in_stores: Stores<I>, fn: any, initial_value?: null): Readable<null>;
