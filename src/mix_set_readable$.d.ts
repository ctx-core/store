import type { Readable } from './readable';
import type { mix_set_readable_I } from './mix_set_readable';
import type { Writable_set_T } from './writable';
export declare function mix_set_readable$<Val extends unknown = unknown>(store: Readable<Val>, set?: Writable_set_T<Val>): mix_set_readable$_I<Val>;
export interface mix_set_readable$_I<Val extends unknown = unknown> extends mix_set_readable_I<Val> {
    $: Val;
}
export declare class mix_set_readable$_C<Val extends unknown = unknown> implements mix_set_readable$_I<Val> {
    protected store: mix_set_readable$_I<Val>;
    constructor(store: mix_set_readable$_I<Val>);
    readonly subscribe: (this: void, run: import("svelte/store").Subscriber<Val>, invalidate?: ((value?: Val | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    readonly set: Writable_set_T<Val>;
    readonly update: import("./writable").Writable_update_T<Val>;
    $: Val;
}
