import type { writable_stores_type } from './writable_stores_type'
import type { Writable } from './writable'
export type writable_stores_val_type<I extends writable_stores_type<unknown>> =
	I extends Writable<infer O>[]
	? O
	: I extends Writable<infer O>
		? O
		: never
