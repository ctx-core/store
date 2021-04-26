import type { Readable } from './readable';
export declare class readable_C<Val extends unknown = unknown> implements Readable<Val> {
    protected store: Readable<Val>;
    constructor(store: Readable<Val>);
    readonly subscribe: (this: void, run: import("svelte/store").Subscriber<Val>, invalidate?: ((value?: Val | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
}
