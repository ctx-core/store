import type { Readable } from './lib';
import type { Subscriber } from './Subscriber';
/**
 * Calls the given fn the next time the value of the store changes, then unsubscribes.
 */
export declare function subscribe__change__once<I extends unknown>(store: Readable<I>, fn: Subscriber<I>): import("./Unsubscriber").Unsubscriber;
