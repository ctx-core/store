import type { Readable } from './readable';
export declare function subscribe_wait_timeout<Val extends unknown = unknown, Store extends Readable<Val> = Readable<Val>>(store: Store, condition_fn: ((val: Val) => boolean) | undefined, timeout: number): Promise<Val>;
export { subscribe_wait_timeout as subscribe_wait_for_timeout };
