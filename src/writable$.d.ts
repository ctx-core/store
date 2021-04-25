import type { StartStopNotifier } from './StartStopNotifier';
import { Writable } from './writable';
import type { Readable$ } from './readable$';
export declare function writable$<Val extends unknown = unknown>(value: Val, start?: StartStopNotifier<Val>): Writable$<Val>;
export declare function mix_writable$<Val extends unknown = unknown>(store: Writable<Val>): writable_mix_I<Val>;
export interface writable_mix_I<Val extends unknown = unknown> {
    readonly $: Val;
}
export interface Writable$<Val extends unknown = unknown> extends Writable<Val>, Readable$<Val>, writable_mix_I<Val> {
    $: Val;
}
