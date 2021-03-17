import { derived as in_derived } from 'svelte/store'
import { _tuple, isArray } from '@ctx-core/array'
import type { Readable } from './readable'
import type { Stores } from './Stores'
import type { ExtractStoresValues } from './ExtractStoresValues'
import type { Unsubscriber } from './Unsubscriber'
import type { StoresValues } from './StoresValues'
export function derived<Store extends Stores, Val extends unknown = unknown>(
	stores:Store,
	in_fn:derived_in_fn_type<Store, Val>,
	initial_value?:Val
):Readable<Val> {
	return (
		in_fn.length === 1
		? (in_derived as return_derived_type<Store, Val>)(
			stores,
			((values:StoresValues<Store>)=>{
				return (in_fn as derived_out_fn_type<Store, Val>)(
					(isArray(values) ? _tuple(...values) : values) as ExtractStoresValues<Store>
				) as Val
			}) as derived_return_in_fn_type<Store, Val>
		)
		: (in_derived as set_derived_type<Store, Val>)(
			stores,
			((values:StoresValues<Store>, set:(value:Val)=>void)=>{
				return (in_fn as derived_out_fn_type<Store, Val>)(
					(isArray(values) ? _tuple(...values) : values) as ExtractStoresValues<Store>, set
				) as Unsubscriber|void
			}) as derived_set_in_fn_type<Store, Val>,
			initial_value
		)
	)
}
export type derived_in_fn_type<Store extends Stores, Val extends unknown = unknown> = (
	values:ExtractStoresValues<Store>, set:(value:Val)=>void
)=>Val|Unsubscriber|void
export type derived_out_fn_type<Store extends Stores, Val extends unknown = unknown> = (
	values:ExtractStoresValues<Store>, set?:(value:Val)=>void
)=>Val|Unsubscriber|void
export type derived_return_in_fn_type<Store extends Stores, Val extends unknown = unknown> = (
	values:ExtractStoresValues<Store>
)=>Val
export type derived_set_in_fn_type<Store extends Stores, Val extends unknown = unknown> =
	(values:ExtractStoresValues<Store>, set:(value:Val)=>void)=>Unsubscriber|void
export type return_derived_type<Store extends Stores, Val extends unknown = unknown> =
	(
		stores:Store,
		fn:(values:StoresValues<Store>)=>Val
	)=>Readable<Val>
export type set_derived_type<Store extends Stores, Val extends unknown = unknown> =
	(
		stores:Store,
		fn:(
			values:StoresValues<Store>,
			set:(value:Val)=>void
		)=>Unsubscriber|void,
		initial_value?:Val
	)=>Readable<Val>
