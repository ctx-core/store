import type { Readable } from 'svelte/store';
export declare function subscribe_wait_for<T>(store: Readable<T>, condition_fn?: (T: any) => any): Promise<T>;
export declare const wait_for__subscribe: typeof subscribe_wait_for;
