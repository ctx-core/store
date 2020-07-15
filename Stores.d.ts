import { Readable } from 'svelte/store';
export declare type Stores = Readable<any> | [Readable<any>, ...Array<Readable<any>>];
