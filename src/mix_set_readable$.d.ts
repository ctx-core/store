import type { Readable } from './readable';
import type { mix_set_readable_I } from './mix_set_readable';
import type { Writable_set_T } from './writable';
export declare function mix_set_readable$<Val extends unknown = unknown>(store: Readable<Val>, set?: Writable_set_T<Val>): mix_set_readable$_I<Val>;
export interface mix_set_readable$_I<Val extends unknown = unknown> extends mix_set_readable_I<Val> {
    $: Val;
}
