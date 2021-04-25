import type { Updater } from 'svelte/store';
export { writable } from 'svelte/store';
export type { Writable } from 'svelte/store';
export declare type Writable_set_T<Val extends unknown = unknown> = (this: void, value: Val) => void;
export declare type Writable_update_T<Val extends unknown = unknown> = (this: void, update: Updater<Val>) => void;
