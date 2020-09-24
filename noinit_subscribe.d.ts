import type { Readable } from './lib';
import type { Unsubscriber } from './Unsubscriber';
/**
 * Subscribes the fn to store but does not have the initial call.
 */
export declare function noinit_subscribe<I extends unknown = unknown>(store: Readable<I>, fn: any): Unsubscriber;
export declare const subscribe__noinit: typeof noinit_subscribe;