import type { Readable } from 'svelte/store'
export type Stores = Readable<any>|[Readable<any>, ...Array<Readable<any>>];
