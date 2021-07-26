class SingletonContainer {
    static _container = new Map();

    /**
     * 
     * @param {string} key 
     */
    static _has(key: string) {
        return this._container.has(key);
    }

    /**
     * Create `{any}` instance with `{string}` key
     * @param {string} key 
     * @param {any} value 
     */
    static set(key: string, value: any) {
        !this._has(key) && this._container.set(key, value);
    }

    /**
     * Get created `{any}` instance from container with `{string}` key
     * @param {string} key
     */
    static get(key: string) {
        return this._container.get(key);
    }


    /**
     * Delete instance with key
     * @param {string} key
     */
    static delete(key: string) {
        this._container.delete(key);
    }
}

export default SingletonContainer;
