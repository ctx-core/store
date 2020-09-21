import type { Subscriber } from './Subscriber';
import type { Unsubscriber } from './Unsubscriber';
export declare type StartStopNotifier<I extends unknown> = (set: Subscriber<I>) => Unsubscriber | void;
