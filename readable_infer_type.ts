import type { Readable } from './readable'
export type readable_infer_type<I extends Readable<unknown>> =
	I extends (infer O) ? O : never
