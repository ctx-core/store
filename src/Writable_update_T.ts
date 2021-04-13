import type { Updater } from './Updater'
export type Writable_update_T<T> = (this:void, updater:Updater<T>)=>void
