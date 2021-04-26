import type { Writable, Writable_set_T, Writable_update_T } from './writable';
import type { Readable_subscribe_T } from './Readable_subscribe_T';
export declare class writable_C<Val extends unknown = unknown> implements Writable<Val> {
    protected store: Writable<Val>;
    constructor(store: Writable<Val>);
    readonly subscribe: Readable_subscribe_T<Val>;
    readonly set: Writable_set_T<Val>;
    readonly update: Writable_update_T<Val>;
}
