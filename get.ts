import { get as get_ } from 'svelte/store'
export function get<T = unknown>(store) {
	return get_(store) as T
}
