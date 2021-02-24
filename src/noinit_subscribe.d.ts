import type { Readable } from './readable';
import type { Unsubscriber } from './Unsubscriber';
/**
 * Subscribes the fn to store but does not have the initial call.
 */
export declare function noinit_subscribe<Val extends unknown = unknown>(store: Readable<Val>, fn: any): Unsubscriber;
export { noinit_subscribe as subscribe__noinit };
