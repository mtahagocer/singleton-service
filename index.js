export default class SingletonContainer {
}
SingletonContainer._container = new Map();
SingletonContainer._has = (key) => SingletonContainer._container.has(key);
/**
 * Create `any` instance with `string` key
 */
SingletonContainer.set = (key, value, force = false) => {
    if (!SingletonContainer._has(key) || (SingletonContainer._has(key) && force))
        SingletonContainer._container.set(key, value);
    else
        throw new Error(`${key} is already in the container, force if you want to update it`);
};
// Get created `any` instance from container with `string` key
SingletonContainer.get = (key) => SingletonContainer._container.get(key);
// Delete instance with key
SingletonContainer.delete = (key) => SingletonContainer._container.delete(key);
