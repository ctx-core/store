import type { Readable, Updater } from 'svelte/store'
import { assign } from '@ctx-core/object'
import { get } from './get'
import type { Writable_set_T, Writable_update_T } from './writable'
export function mix_set_readable<Val extends unknown = unknown>(
	store:Readable<Val>, set:Writable_set_T<Val>
):mix_set_readable_I<Val> {
	return assign(store as mix_set_readable_I<Val>, {
		set,
		update(updater:Updater<Val>) {
			set(updater(get(store)))
		}
	})
}
export interface mix_set_readable_I<Val extends unknown = unknown> extends Readable<Val> {
	set:Writable_set_T<Val>
	update:Writable_update_T<Val>
}
export class mix_set_readable_C<Val extends unknown = unknown> implements mix_set_readable_I<Val> {
	constructor(protected store:mix_set_readable_I<Val>) {}
	readonly subscribe = this.store.subscribe
	readonly set = this.store.set
	readonly update = this.store.update
}
