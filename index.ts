
export default class SingletonContainer {

    static _container = new Map();

    static _has = (key: string) => SingletonContainer._container.has(key);


    /**
     * Create `any` instance with `string` key
     */
    static set = <T = unknown>(key: string, value: T, force = false) => {

        if (!SingletonContainer._has(key) || (SingletonContainer._has(key) && force)) SingletonContainer._container.set(key, value);

        else throw new Error(`${key} is already in the container, force if you want to update it`);

    }

    // Get created `any` instance from container with `string` key
    static get = <T>(key: string) => SingletonContainer._container.get(key) as T;

    // Delete instance with key
    static delete = (key: string) => SingletonContainer._container.delete(key);
}
