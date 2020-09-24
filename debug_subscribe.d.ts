import type { Readable } from './lib';
import type { Unsubscriber } from './Unsubscriber';
/**
 * Logs (console.debug) changes to a store
 */
export declare function debug_subscribe<I extends unknown = unknown>(store: Readable<I>, label: string): Unsubscriber;
export declare const subscribe__debug: typeof debug_subscribe;
