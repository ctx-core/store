import type { Readable } from 'svelte/store';
export declare type Stores<I extends unknown = unknown> = Readable<I> | [Readable<I>, ...Array<Readable<I>>];
