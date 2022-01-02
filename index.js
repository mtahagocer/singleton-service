export default class SingletonService {
}
SingletonService._container = new Map();
SingletonService._has = (key) => SingletonService._container.has(key);
/**
 * Create `any` instance with `string` key
 */
SingletonService.set = (key, value, force = false) => {
    if (!SingletonService._has(key) || (SingletonService._has(key) && force))
        SingletonService._container.set(key, value);
    else
        throw new Error(`${key} is already in the container, force if you want to update it`);
};
// Get created `any` instance from container with `string` key
SingletonService.get = (key) => SingletonService._container.get(key);
// Delete instance with key
SingletonService.delete = (key) => SingletonService._container.delete(key);
