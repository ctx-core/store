import type { Stores } from './Stores';
import type { ExtractStoresValues } from './ExtractStoresValues';
import type { Unsubscriber } from './Unsubscriber';
import type { Readable } from './lib';
export declare function derived<S extends Stores, O>(stores: S, in_fn: derived_in_fn_type<S, O>, initial_value?: O): Readable<O>;
export declare type derived_in_fn_type<S extends Stores, O> = (values: ExtractStoresValues<S>, set: (value: O) => void) => Unsubscriber | void;
