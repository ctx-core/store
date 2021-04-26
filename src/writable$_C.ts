import type { Writable$ } from './writable$'
import type { Writable_set_T, Writable_update_T } from './writable'
import type { Readable_subscribe_T } from './Readable_subscribe_T'
export class writable$_C<Val extends unknown = unknown> implements Writable$<Val> {
	constructor(protected store:Writable$<Val>) {}
	readonly subscribe:Readable_subscribe_T<Val> = this.store.subscribe
	readonly set:Writable_set_T<Val> = this.store.set
	readonly update:Writable_update_T<Val> = this.store.update
	$:Val = this.store.$
}
