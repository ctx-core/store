import { Readable, readable } from './lib'
import { get } from './get'
import type { maybe_undefined } from '@ctx-core/function'
import type { StartStopNotifier } from './StartStopNotifier'
import type { Subscriber } from './Subscriber'
export function _readable_set_a1<I extends unknown = unknown>(initial) {
  let set = undefined as maybe_undefined<_readable_set_a1_set_type<I>>
  const store = readable<I>(initial, (in_set => {
    set = in_set;
  }) as StartStopNotifier<I>) as Readable<I>;
  get(store);
  return [store, set as _readable_set_a1_set_type<I>];
}
export type _readable_set_a1_set_type<I extends unknown = unknown> = Subscriber<I>
