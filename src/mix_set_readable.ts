import type { Readable, Updater } from 'svelte/store'
import { assign } from '@ctx-core/object'
import { get } from './get'
export function mix_set_readable<Val extends unknown = unknown>(
	store:Readable<Val>, set:Updater<Val>
):mix_set_readable_I<Val> {
	return assign(store as mix_set_readable_I<Val>, {
		set,
		update(updater:Updater<Val>) {
			set(updater(get(store)))
		}
	})
}
export interface mix_set_readable_I<Val extends unknown = unknown> extends Readable<Val> {
	set:Updater<Val>
	update(this: void, updater:Updater<Val>):void
}
