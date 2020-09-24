import type { Subscriber } from './Subscriber';
import type { Invalidator } from './Invalidator';
import type { Unsubscriber } from './Unsubscriber';
import type { Readable } from './lib';
/**
 * Delegates to store.subscribe
 */
export declare function subscribe<I extends unknown = unknown>(store: Readable<I>, run: Subscriber<I>, invalidate?: Invalidator<I>): Unsubscriber;
