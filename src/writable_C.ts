import type { Writable } from './writable'
export class writable_C<Val extends unknown = unknown> implements Writable<Val> {
	constructor(protected store: Writable<Val>) {}
	readonly set = this.store.set
	readonly update = this.store.update
	readonly subscribe = this.store.subscribe
}
