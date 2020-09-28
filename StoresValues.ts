import type { Readable } from './readable'
export type StoresValues<T> =
  T extends Readable<infer U>
    ? U
    : {
      [K in keyof T]: (
        T[K] extends Readable<infer U>
          ? U
          : never);
    };