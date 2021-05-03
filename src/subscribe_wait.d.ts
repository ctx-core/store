import type { Readable } from 'svelte/store';
export declare function subscribe_wait<Val extends unknown = unknown, Store extends Readable<Val> = Readable<Val>>(store: Store, condition_fn?: (val: Val) => boolean): Promise<Val>;
export { subscribe_wait as subscribe_wait_for, subscribe_wait as wait_for__subscribe };
