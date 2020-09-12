import type { Stores } from './Stores';
/**
 * Returns a function that [clear__store](#clear__store).
 * @param {Stores} stores
 * @param value
 * @returns {function(): void}
 */
export declare function _clear__store<S extends Stores>(stores: any, value?: any): () => void;
