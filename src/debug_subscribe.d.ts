import type { Readable } from './readable';
import type { Unsubscriber } from './Unsubscriber';
/**
 * Logs (console.debug) changes to a store
 */
export declare function debug_subscribe<Val extends unknown = unknown>(store: Readable<Val>, label: string): Unsubscriber;
export { debug_subscribe as subscribe__debug };
