import type { Unsubscriber } from './Unsubscriber';
import type { Readable } from './readable';
/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the store_a1 changes.
 */
export declare function multi_subscribe<Val extends unknown, Store extends Readable<any> = Readable<any>>(store_a1: Store[], fn: (($store_a1: Val[]) => void)): Unsubscriber;
export { multi_subscribe as subscribe__multi };
