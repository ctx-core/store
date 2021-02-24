import { noinit_subscribe } from './noinit_subscribe'
import type { Readable } from './readable'
import type { Subscriber } from './Subscriber'
import type { Unsubscriber } from './Unsubscriber'
/**
 * Calls the given fn the next time the value of the store changes, then unsubscribes.
 */
export function change_once_subscribe<Val extends unknown = unknown>(
	store:Readable<Val>,
	fn:Subscriber<Val>
):Unsubscriber {
	const unsubscribe = noinit_subscribe<Val>(store, (value=>{
		const out = fn(value)
		unsubscribe()
		return out
	}) as Subscriber<Val>) as Unsubscriber
	return unsubscribe
}
export { change_once_subscribe as subscribe__change__once }
