import type { Writable$ } from './writable$';
import type { Writable, Writable_set_T, Writable_update_T } from './writable';
import { readable$_C } from './readable$_C';
export declare class writable$_C<Val extends unknown = unknown> extends readable$_C<Val> implements Writable$<Val> {
    protected store: Writable<Val>;
    constructor(store: Writable<Val>);
    readonly set: Writable_set_T<Val>;
    readonly update: Writable_update_T<Val>;
    get $(): Val;
    set $(val: Val);
    get _(): Val;
    set _(val: Val);
}
