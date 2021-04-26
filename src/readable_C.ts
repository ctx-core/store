import type { Readable } from './readable'
export class readable_C<Val extends unknown = unknown> implements Readable<Val> {
	constructor(protected store: Readable<Val>) {}
	readonly subscribe = this.store.subscribe
}
