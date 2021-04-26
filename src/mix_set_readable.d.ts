import type { Readable } from 'svelte/store';
import type { Writable_set_T, Writable_update_T } from './writable';
export declare function mix_set_readable<Val extends unknown = unknown>(store: Readable<Val>, set: Writable_set_T<Val>): mix_set_readable_I<Val>;
export interface mix_set_readable_I<Val extends unknown = unknown> extends Readable<Val> {
    set: Writable_set_T<Val>;
    update: Writable_update_T<Val>;
}
export declare class mix_set_readable_C<Val extends unknown = unknown> implements mix_set_readable_I<Val> {
    protected store: mix_set_readable_I<Val>;
    constructor(store: mix_set_readable_I<Val>);
    readonly subscribe: (this: void, run: import("svelte/store").Subscriber<Val>, invalidate?: ((value?: Val | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    readonly set: Writable_set_T<Val>;
    readonly update: Writable_update_T<Val>;
}
