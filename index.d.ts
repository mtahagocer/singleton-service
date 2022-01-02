export default class SingletonService {
    static _container: Map<any, any>;
    static _has: (key: string) => boolean;
    /**
     * Create `any` instance with `string` key
     */
    static set: <T = unknown>(key: string, value: T, force?: boolean) => void;
    static get: <T>(key: string) => T;
    static delete: (key: string) => boolean;
}
