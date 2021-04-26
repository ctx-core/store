import type { Writable$ } from './writable$';
export declare class writable$_C<Val extends unknown = unknown> implements Writable$<Val> {
    protected store: Writable$<Val>;
    constructor(store: Writable$<Val>);
    readonly set: (this: void, value: Val) => void;
    readonly update: (this: void, updater: import("svelte/store").Updater<Val>) => void;
    readonly subscribe: (this: void, run: import("svelte/store").Subscriber<Val>, invalidate?: ((value?: Val | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    $: Val;
}
