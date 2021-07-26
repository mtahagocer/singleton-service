declare class SingletonContainer {
    static _container: Map<any, any>;
    /**
     *
     * @param {string} key
     */
    static _has(key: string): boolean;
    /**
     * Create `{any}` instance with `{string}` key
     * @param {string} key
     * @param {any} value
     */
    static set(key: string, value: any): void;
    /**
     * Get created `{any}` instance from container with `{string}` key
     * @param {string} key
     */
    static get(key: string): any;
    /**
     * Delete instance with key
     * @param {string} key
     */
    static delete(key: string): void;
}
export default SingletonContainer;
