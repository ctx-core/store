import { promise_timeout } from '@ctx-core/function';
import { subscribe_wait } from './subscribe_wait';
export function subscribe_wait_timeout(store, condition_fn = (val) => !!val, timeout) {
    return promise_timeout(subscribe_wait(store, condition_fn), timeout);
}
export { subscribe_wait_timeout as subscribe_wait_for_timeout };
//# sourceMappingURL=src/subscribe_wait_timeout.js.map