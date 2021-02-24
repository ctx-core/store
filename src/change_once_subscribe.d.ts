import type { Readable } from './readable';
import type { Subscriber } from './Subscriber';
import type { Unsubscriber } from './Unsubscriber';
/**
 * Calls the given fn the next time the value of the store changes, then unsubscribes.
 */
export declare function change_once_subscribe<Val extends unknown = unknown>(store: Readable<Val>, fn: Subscriber<Val>): Unsubscriber;
export { change_once_subscribe as subscribe__change__once };
