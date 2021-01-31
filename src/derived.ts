import { derived as in_derived } from 'svelte/store'
import type { Readable } from './readable'
import type { Stores } from './Stores'
import type { ExtractStoresValues } from './ExtractStoresValues'
import type { Unsubscriber } from './Unsubscriber'
import type { StoresValues } from './StoresValues'
export function derived<S extends Stores, O>(
	stores:S,
	in_fn:derived_in_fn_type<S, O>,
	initial_value?:O
) {
	return (
		in_fn.length === 1
		? (in_derived as return_derived_type<S, O>)(
			stores,
			((values:StoresValues<S>)=>{
				return (in_fn as derived_out_fn_type<S, O>)(
					values as ExtractStoresValues<S>
				) as O
			}) as derived_return_in_fn_type<S, O>
		)
		: (in_derived as set_derived_type<S, O>)(
			stores,
			((values:StoresValues<S>, set:(value:O)=>void)=>{
				return (in_fn as derived_out_fn_type<S, O>)(
					values as ExtractStoresValues<S>, set
				) as Unsubscriber|void
			}) as derived_set_in_fn_type<S, O>,
			initial_value
		)
	)
}
export type derived_in_fn_type<S extends Stores, O> = (
	values:ExtractStoresValues<S>, set:(value:O)=>void
)=>O|Unsubscriber|void
export type derived_out_fn_type<S extends Stores, O> = (
	values:ExtractStoresValues<S>, set?:(value:O)=>void
)=>O|Unsubscriber|void
export type derived_return_in_fn_type<S extends Stores, O> = (
	values:ExtractStoresValues<S>
)=>O
export type derived_set_in_fn_type<S extends Stores, O> =
	(values:ExtractStoresValues<S>, set:(value:O)=>void)=>Unsubscriber|void
export type return_derived_type<S extends Stores, O> =
	(
		stores:S,
		fn:(values:StoresValues<S>)=>O
	)=>Readable<O>
export type set_derived_type<S extends Stores, O> =
	(
		stores:S,
		fn:(
			values:StoresValues<S>,
			set:(value:O)=>void
		)=>Unsubscriber|void,
		initial_value?:O
	)=>Readable<O>
