import type { Readable } from './lib';
/**
 * Subscribes the fn to store but does not have the initial call.
 */
export declare function noinit_subscribe<I extends unknown>(store: Readable<I>, fn: any): import("./Unsubscriber").Unsubscriber;
export declare const subscribe__noinit: typeof noinit_subscribe;
