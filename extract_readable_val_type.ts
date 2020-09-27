import type { Readable } from './lib'
export type extract_readable_val_type<I extends Readable<unknown>> =
	I extends (Readable<infer O>)
	? O
	: Extract<I, Readable<unknown>> extends Readable<infer O>
		? O
		: unknown
