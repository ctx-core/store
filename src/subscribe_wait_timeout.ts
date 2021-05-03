import { promise_timeout } from '@ctx-core/function'
import { subscribe_wait } from './subscribe_wait'
import type { Readable } from './readable'
export function subscribe_wait_timeout<Val extends unknown = unknown, Store extends Readable<Val> = Readable<Val>>(
	store:Store,
	condition_fn = (val:Val)=>!!val,
	timeout:number
) {
	return promise_timeout<Val>(subscribe_wait<Val, Store>(store, condition_fn), timeout)
}
export {
	subscribe_wait_timeout as subscribe_wait_for_timeout
}
