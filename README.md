# Singleton Container (Less than 1kb)

Just initialize your instances on app entry point, then use on where ever you want.

Use repo as a npm dependency on your package.json like :

```json
"singleton": "https://github.com/mtahagocer/SingletonService"
```

In example :

Singleton/create.ts
```js
import NetworkInstance from '../network/instance';

// for create instance with a unic key
SingletonContainer.set('Request', NetworkInstance);
```

Finally, on app entry point, you can initialize all your instances.
```js
import '@src/services/Singleton/create';
```

Usage:

SomeFile.js

```js
import SingletonContainer from 'singleton';

// for get instance with saved key
const Request = SingletonContainer.get('Request');


//For dispose instance with saved key
SingletonContainer.delete('Request');

```