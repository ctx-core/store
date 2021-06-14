import type { Readable } from './readable';
import type { StartStopNotifier } from './StartStopNotifier';
export declare function readable$<Val extends unknown = unknown>(value: Val, start: StartStopNotifier<Val>): Readable$<Val>;
export declare function mix_readable$<Val extends unknown = unknown>(store: Readable<Val>): Readable$<Val>;
export interface Readable$<Val extends unknown = unknown> extends Readable<Val> {
    readonly $: Val;
    readonly _: Val;
}
