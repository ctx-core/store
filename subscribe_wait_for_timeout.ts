import { promise_timeout } from '@ctx-core/function'
import type { ExtractReadableValue } from './ExtractReadableValue'
import { subscribe_wait_for } from './subscribe_wait_for'
import type { Readable } from './readable'
export function subscribe_wait_for_timeout<S extends Readable<unknown>>(
	store:S,
	condition_fn = (val:ExtractReadableValue<S>)=>!!val,
	timeout:number
) {
	return promise_timeout(subscribe_wait_for(store, condition_fn), timeout)
}
