class SingletonContainer {
    /**
     *
     * @param {string} key
     */
    static _has(key) {
        return this._container.has(key);
    }
    /**
     * Create `{any}` instance with `{string}` key
     * @param {string} key
     * @param {any} value
     */
    static set(key, value) {
        !this._has(key) && this._container.set(key, value);
    }
    /**
     * Get created `{any}` instance from container with `{string}` key
     * @param {string} key
     */
    static get(key) {
        return this._container.get(key);
    }
    /**
     * Delete instance with key
     * @param {string} key
     */
    static delete(key) {
        this._container.delete(key);
    }
}
SingletonContainer._container = new Map();
export default SingletonContainer;
