/**
 * Calls set on the given store with the given val
 */
import type { Writable } from 'svelte/store';
export declare function set<Val extends unknown = unknown>(store: Writable<Val>, val: Val): void;
