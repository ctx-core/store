import { get as get_ } from 'svelte/types/runtime/store'
export function get<T>(store) {
	return get_(store) as T
}
