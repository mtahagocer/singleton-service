
export default class SingletonService {

    static _container = new Map();

    static _has = (key: string) => SingletonService._container.has(key);


    /**
     * Create `any` instance with `string` key
     */
    static set = <T = unknown>(key: string, value: T, force = false) => {

        if (!SingletonService._has(key) || (SingletonService._has(key) && force)) SingletonService._container.set(key, value);

        else throw new Error(`${key} is already in the container, force if you want to update it`);

    }

    // Get created `any` instance from container with `string` key
    static get = <T>(key: string) => SingletonService._container.get(key) as T;

    // Delete instance with key
    static delete = (key: string) => SingletonService._container.delete(key);
}
