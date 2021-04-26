import type { Readable$ } from './readable$'
export class readable$_C<Val extends unknown = unknown> implements Readable$<Val> {
	constructor(protected store: Readable$<Val>) {}
	readonly subscribe = this.store.subscribe
	get $() {
		return this.store.$
	}
}
