# SingletonService

Just initialize your instances on app entry point, then use on where ever you want.

Use repo as a npm dependency on your package.json like :

```json
"singleton": "https://github.com/mtahagocer/SingletonService"
```

In example :

Singleton/create.ts
```js
import NetworkInstance from '../network/instance';

SingletonContainer.set('Request', NetworkInstance);
```

Finally, on app entry point, you can initialize all your instances.
```js
import '@src/services/Singleton/create';
```

Usage:

SomeFile.js
import SingletonContainer from 'singleton';

const Request = SingletonContainer.get('Request');


 For dispose instance
 SingletonContainer.delete('Request');
 
