import { readable } from './lib'
import { get } from './get'
export function _readable_set_a1<T>(initial) {
  let set = undefined;
  const store = readable<T>(initial, set_ => {
    set = set_;
  });
  get(store);
  return [store, set];
}
