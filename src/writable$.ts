import { assign } from '@ctx-core/object'
import type { StartStopNotifier } from './StartStopNotifier'
import { writable, Writable } from './writable'
import { get } from './get'
import type { Readable$ } from './readable$'
export function writable$<Val extends unknown = unknown>(
  value:Val, start?:StartStopNotifier<Val>
) {
  const store = writable<Val>(value, start)
  return assign(store, {
    get $() {
      return get(store)
    },
    set $(val) {
      store.set(val)
    }
  }) as Writable$<Val>
}
export interface Writable$<Val extends unknown = unknown> extends Writable<Val>, Readable$<Val> {
  $:Val
}
