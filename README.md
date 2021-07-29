# Singleton Container (Less than 1kb)

Just initialize your instances on app entry point, then use on where ever you want.

Use repo as a npm dependency on your package.json like :


## Setup
First, install it:

npm install --save singleton-container
or

yarn add singleton-container

## Usage with example :

Singleton/create.ts
```js
import AxiosInstance from '../network/instance';

// for create instance with a unic key
SingletonContainer.set('AxiosInstance', AxiosInstance);
```

Finally, on app entry point, you can initialize all your instances.
```js
import '@src/services/Singleton/create';
```

## Usage:

SomeFile.js

```js
import SingletonContainer from 'singleton';

// for get instance with saved key
const AxiosInstance = SingletonContainer.get('AxiosInstance');


//For dispose instance with saved key
SingletonContainer.delete('AxiosInstance');

```
