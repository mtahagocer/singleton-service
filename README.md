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
import { AxiosInstance as IAxiosInstance } from 'axios';

// for create instance with a unic key
SingletonService.set<IAxiosInstance>('AxiosInstance', AxiosInstance);
```

Finally, on app entry point, you can initialize all your instances.
```js
import '@src/services/Singleton/create';
```

## Usage:

SomeFile.js

```js
import SingletonService from 'singleton';
import { AxiosInstance as IAxiosInstance } from 'axios';

// for get instance with saved key
const AxiosInstance = SingletonService.get<IAxiosInstance>('AxiosInstance');


//For dispose instance with saved key
SingletonService.delete('AxiosInstance');

```
