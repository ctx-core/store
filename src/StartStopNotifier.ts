import type { Subscriber } from './Subscriber'
import type { Unsubscriber } from './Unsubscriber'
export type StartStopNotifier<Val extends unknown = unknown> = (set:Subscriber<Val>)=>Unsubscriber|void
