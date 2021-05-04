import type { Readable$ } from './readable$'
import type { Readable } from './readable'
import type { Readable_subscribe_T } from './Readable_subscribe_T'
import { get } from './get'
export class readable$_C<Val extends unknown = unknown> implements Readable$<Val> {
	constructor(protected store:Readable<Val>) {}
	readonly subscribe:Readable_subscribe_T<Val> = this.store.subscribe
	get $():Val {
		return get(this.store)
	}
}
