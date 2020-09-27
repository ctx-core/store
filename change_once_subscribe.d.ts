import type { Readable } from './readable';
import type { Subscriber } from './Subscriber';
import type { Unsubscriber } from './Unsubscriber';
/**
 * Calls the given fn the next time the value of the store changes, then unsubscribes.
 */
export declare function change_once_subscribe<I extends unknown = unknown>(store: Readable<I>, fn: Subscriber<I>): Unsubscriber;
export declare const subscribe__change__once: typeof change_once_subscribe;
