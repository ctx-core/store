import type { Readable } from './readable';
import type { Writable } from './writable';
export declare type WritableOrReadable<I extends unknown = unknown, S extends Readable<I> = Readable<I>> = S extends Writable<I> ? S : S extends Readable<I> ? S : never;
