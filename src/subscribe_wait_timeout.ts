import { promise_timeout } from '@ctx-core/function'
import type { ExtractReadableValue } from './ExtractReadableValue'
import { subscribe_wait } from './subscribe_wait'
import type { Readable } from './readable'
export function subscribe_wait_timeout<S extends Readable<unknown>>(
	store:S,
	condition_fn = (val:ExtractReadableValue<S>)=>!!val,
	timeout:number
) {
	return promise_timeout(subscribe_wait(store, condition_fn), timeout)
}
export {
	subscribe_wait_timeout as subscribe_wait_for_timeout
}
