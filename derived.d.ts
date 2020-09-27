import type { Stores } from './Stores';
import type { ExtractStoresValues } from './ExtractStoresValues';
import type { Unsubscriber } from './Unsubscriber';
import type { Readable } from './lib';
export declare function derived<S extends Stores, O>(stores: S, in_fn: (values: ExtractStoresValues<S>, set: (value: O) => void) => Unsubscriber | void, initial_value?: O): Readable<O>;
