import type { Readable } from 'svelte/store';
export declare function subscribe_wait_for<I>(store: Readable<I>, condition_fn?: (val: I) => I): Promise<I>;
export declare const wait_for__subscribe: typeof subscribe_wait_for;
