import type { Subscriber } from './Subscriber'
import type { Unsubscriber } from './Unsubscriber'
export type StartStopNotifier<I extends unknown = unknown> = (set:Subscriber<I>)=>Unsubscriber|void
