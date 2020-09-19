import { readable } from './lib'
import { get } from './get'
import type { maybe_undefined } from '@ctx-core/function'
export function _readable_set_a1<I>(initial) {
  let set = undefined as maybe_undefined<_readable_set_a1_set_type<I>>
  const store = readable<I>(initial, in_set => {
    set = in_set;
  });
  get(store);
  return [store, set as _readable_set_a1_set_type<I>];
}
export type _readable_set_a1_set_type<I> = (val:I)=>void
