import type { Stores } from './Stores';
export declare function derived__spread<S extends Stores<unknown>, T extends unknown>(stores: S, fn: any, initial_value?: any): import("svelte/types/runtime/store").Readable<T>;
