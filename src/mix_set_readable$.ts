import { assign } from '@ctx-core/object'
import type { Readable } from './readable'
import { get } from './get'
import type { mix_set_readable_I } from './mix_set_readable'
import { mix_set_readable } from './mix_set_readable'
import type { Writable_set_T } from './writable'
export function mix_set_readable$<Val extends unknown = unknown>(
	store:Readable<Val>, set?:Writable_set_T<Val>
):mix_set_readable$_I<Val> {
	if (set) {
		mix_set_readable<Val>(store, set)
	}
	const mix_set_readable_store = store as mix_set_readable_I<Val>
	if (!mix_set_readable_store.set) {
		throw `There must be a set function argument or store must have a set method`
	}
	return assign(mix_set_readable_store, {
		get $() {
			return get(store)
		},
		set $(val) {
			mix_set_readable_store.set(val)
		}
	})
}
export interface mix_set_readable$_I<Val extends unknown = unknown> extends mix_set_readable_I<Val> {
	$:Val
}
export class mix_set_readable$_C<Val extends unknown = unknown> implements mix_set_readable$_I<Val> {
	constructor(protected store:mix_set_readable$_I<Val>) {}
	readonly subscribe = this.store.subscribe
	readonly set = this.store.set
	readonly update = this.store.update
	$ = this.store.$
}
