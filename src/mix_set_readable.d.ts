import type { Readable, Updater } from 'svelte/store';
export declare function mix_set_readable<Val extends unknown = unknown>(store: Readable<Val>, set: Updater<Val>): mix_set_readable_I<Val>;
export interface mix_set_readable_I<Val extends unknown = unknown> extends Readable<Val> {
    set: Updater<Val>;
    update(this: void, updater: Updater<Val>): void;
}
