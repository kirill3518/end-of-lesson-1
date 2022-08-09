export declare class MyMap<K extends string | number | symbol = string, V = any> {
    data: Record<K, V>;
    set(key: K, value: V): void;
    setAll(items: {
        key: K,
        value: V,
    }[]): void;
    get(key: K): V | undefined;
    getAll(): Record<K, V>;
    has(key: K): boolean;
    remove(key: K): boolean;
    clear(): void;
}