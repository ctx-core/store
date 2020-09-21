import type { Readable } from './lib';
/**
 * Logs (console.debug) changes to a store
 */
export declare function subscribe__debug<I extends unknown>(store: Readable<I>, label: string): import("./Unsubscriber").Unsubscriber;
