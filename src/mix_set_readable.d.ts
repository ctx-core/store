import type { Readable } from 'svelte/store';
import type { Writable_set_T, Writable_update_T } from './writable';
import type { Readable_subscribe_T } from './Readable_subscribe_T';
export declare function mix_set_readable<Val extends unknown = unknown>(store: Readable<Val>, set: Writable_set_T<Val>): mix_set_readable_I<Val>;
export interface mix_set_readable_I<Val extends unknown = unknown> extends Readable<Val> {
    set: Writable_set_T<Val>;
    update: Writable_update_T<Val>;
}
export declare class mix_set_readable_C<Val extends unknown = unknown> implements mix_set_readable_I<Val> {
    protected store: mix_set_readable_I<Val>;
    constructor(store: mix_set_readable_I<Val>);
    readonly subscribe: Readable_subscribe_T<Val>;
    readonly set: Writable_set_T<Val>;
    readonly update: Writable_update_T<Val>;
}
