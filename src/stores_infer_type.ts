import type { Stores } from './Stores'
export type stores_infer_type<Store extends Stores<unknown>> =
	Store extends (infer Val) ? Val : never
