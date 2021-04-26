import type { Readable } from './readable';
import type { Readable_subscribe_T } from './Readable_subscribe_T';
export declare class readable_C<Val extends unknown = unknown> implements Readable<Val> {
    protected store: Readable<Val>;
    constructor(store: Readable<Val>);
    readonly subscribe: Readable_subscribe_T<Val>;
}
