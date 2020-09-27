import type { Readable } from './lib';
export declare type StoresValues<T> = T extends Readable<infer U> ? U : {
    [K in keyof T]: (T[K] extends Readable<infer U> ? U : never);
};
