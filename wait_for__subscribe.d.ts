import { Readable } from 'svelte/store';
export declare function wait_for__subscribe<T>(store: Readable<T>, condition_fn?: (T: any) => any): Promise<T>;
