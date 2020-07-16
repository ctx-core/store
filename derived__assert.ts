import { derived as derived__svelte } from 'svelte/store'
import { Stores } from './Stores'
/**
 * Asserts fn is a function then creates a derived stores
 * @param {Stores} stores
 * @param {function} fn
 * @returns {Readable}
 */
export function derived__assert<S extends Stores, T>(stores, fn, initial_value?) {
	if (typeof fn !== 'function') {
		const message__error = 'fn is not a function'
		console.trace(message__error)
		throw message__error
	}
	return derived__svelte<S, T>(stores, fn, initial_value)
}
