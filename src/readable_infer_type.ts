import type { Readable } from './readable'
export type readable_infer_type<I> =
	I extends Readable<infer O>
		? O
		: never
