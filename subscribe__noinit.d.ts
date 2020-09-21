import type { Readable } from './lib';
/**
 * Subscribes the fn to store but does not have the initial call.
 */
export declare function subscribe__noinit<I extends unknown>(store: Readable<I>, fn: any): import("./Unsubscriber").Unsubscriber;
