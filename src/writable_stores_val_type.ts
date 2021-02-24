import type { writable_stores_type } from './writable_stores_type'
import type { Writable } from './writable'
export type writable_stores_val_type<Store extends writable_stores_type<unknown>> =
	Store extends Writable<infer O>[]
	? O
	: Store extends Writable<infer O>
		? O
		: never
