import type { Subscriber, Unsubscriber } from 'svelte/store'
import type { Invalidator } from './Invalidator'
export type Readable_subscribe_T<T> = (this:void, run:Subscriber<T>, invalidate?:Invalidator<T>)=>Unsubscriber
