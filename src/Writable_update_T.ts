import type { Updater } from './Updater'
export type Writable_update_T<T extends unknown = unknown> = (this:void, updater:Updater<T>)=>void
