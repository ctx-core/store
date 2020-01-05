import { writable } from 'svelte/store'
import { subscribe } from './lib'
import { _b } from '@ctx-core/object'
declare const window
export const b__ctx__store__global = _b('__ctx__store__global', ()=>{
	const __ctx__store__global =
		writable(
			typeof window === 'undefined' ? null : window
		)
	return __ctx__store__global
})
export const __ctx__store__global = b__ctx__store__global()
export let ctx__store__global
subscribe(__ctx__store__global, __=>ctx__store__global = __)
