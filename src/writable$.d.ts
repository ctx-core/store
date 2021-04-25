import type { StartStopNotifier } from './StartStopNotifier';
import { Writable } from './writable';
import type { Readable$ } from './readable$';
export declare function writable$<Val extends unknown = unknown>(value: Val, start?: StartStopNotifier<Val>): Writable$<Val>;
export interface Writable$<Val extends unknown = unknown> extends Writable<Val>, Readable$<Val> {
    $: Val;
}
