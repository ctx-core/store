import { derived as in_derived } from 'svelte/store'
import type { Stores } from './Stores'
import type { ExtractStoresValues } from './ExtractStoresValues'
import type { Unsubscriber } from './Unsubscriber'
import type { StoresValues } from './StoresValues'
import type { Readable } from './lib'
export function derived<S extends Stores, O>(
	stores:S,
	in_fn:derived_in_fn_type<S, O>,
	initial_value?:O
) {
	const fn = (values:StoresValues<S>, set:(value:O)=>void)=>{
		return in_fn(values as ExtractStoresValues<S>, set) as Unsubscriber|void
	}
	return in_derived(stores, fn, initial_value) as Readable<O>
}
export type derived_in_fn_type<S extends Stores, O> =
	(values:ExtractStoresValues<S>, set:(value:O)=>void)=>Unsubscriber|void
