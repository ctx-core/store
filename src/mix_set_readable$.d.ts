import type { Readable } from './readable';
import type { mix_set_readable_I } from './mix_set_readable';
import type { Writable_set_T } from './writable';
import type { Writable_update_T } from './writable';
import type { Readable_subscribe_T } from './Readable_subscribe_T';
export declare function mix_set_readable$<Val extends unknown = unknown>(store: Readable<Val>, set?: Writable_set_T<Val>): mix_set_readable$_I<Val>;
export interface mix_set_readable$_I<Val extends unknown = unknown> extends mix_set_readable_I<Val> {
    $: Val;
    _: Val;
}
export declare class mix_set_readable$_C<Val extends unknown = unknown> implements mix_set_readable$_I<Val> {
    protected store: mix_set_readable$_I<Val>;
    constructor(store: mix_set_readable$_I<Val>);
    readonly subscribe: Readable_subscribe_T<Val>;
    readonly set: Writable_set_T<Val>;
    readonly update: Writable_update_T<Val>;
    $: Val;
    _: Val;
}
