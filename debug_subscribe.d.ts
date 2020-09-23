import type { Readable } from './lib';
/**
 * Logs (console.debug) changes to a store
 */
export declare function debug_subscribe<I extends unknown>(store: Readable<I>, label: string): import("./Unsubscriber").Unsubscriber;
export declare const subscribe__debug: typeof debug_subscribe;
