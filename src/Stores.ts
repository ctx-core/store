import type { Readable } from 'svelte/store'
export type Stores<I extends unknown = unknown> =
	Readable<I>|[Readable<I>, ...Array<Readable<I>>];