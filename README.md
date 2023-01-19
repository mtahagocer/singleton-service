# Singleton Container (Less than 1kb)

This package provides a lightweight utility for creating singleton instances in Node.js applications. It allows you to initialize your instances in separate functions and use them wherever you want throughout your application.


## Installation


To install the package, run the following command in your project's root directory:

```
npm install --save singleton-service
```

or


```
yarn add singleton-service
```

## Usage with examples :

Here are some examples of how the SingletonService class can be used in a real-life application:

#

### Example 1: Database Connection


You may want to create a singleton instance of your database connection to ensure that only one connection is established to the database. This can be done by creating a function that initializes the connection and invoking it at a specific point in the application.

```typescript

// services/database.ts
import SingletonService from 'singleton-service';
import { createConnection, Connection } from 'typeorm';

const initializeDatabase = () => {

  const connection: Connection = createConnection();

  SingletonService.set<Connection>('database', connection);

}

// in any file in your application
import {initializeDatabase} from './services/database';

initializeDatabase();

const connection = SingletonService.get<Connection>('database');

```

### Example 2: Logger


You may want to create a singleton instance of your logger to ensure that all logs are written to the same file. This can be done by creating a function that initializes the logger and invoking it at a specific point in the application.

```typescript

// services/logger.ts
import SingletonService from 'singleton-service';
import { createLogger, Logger } from 'winston';

const initializeLogger = () => {

  const logger: Logger = createLogger({
    transports: [
      new winston.transports.File({ filename: 'app.log' }),
    ],
  });

  SingletonService.set<Logger>('logger', logger);
}

// in any file in your application
import {initializeLogger} from './services/logger';

initializeLogger();

const logger = SingletonService.get<Logger>('logger');

logger.info('Application started');

```

### Example 3: Caching


You may want to create a singleton instance of your caching service to ensure that all data is stored in the same cache. This can be done by creating a function that initializes the cache and invoking it at a specific point in the application.

```typescript

// services/cache.ts
import SingletonService from 'singleton-service';
import { createCache, Cache } from 'memory-cache';

const initializeCache = () => {

  const cache: Cache = createCache();

  SingletonService.set<Cache>('cache', cache);

}

// in any file in your application
import {initializeCache} from './services/cache';

initializeCache();

const cache = SingletonService.get<Cache>('cache');

```

In this example, the initializeCache function is called to create a singleton instance of the Cache object and store it in the SingletonService container with the key 'cache'. This instance can then be retrieved in any other part of the application by calling `SingletonService.get<Cache>('cache')`.

You can also use the SingletonService.delete(key) function to dispose of the instance with the given key.

# Contributing

We welcome contributions of all kinds from anyone.

## Getting Started

1. Fork the repository on GitHub
2. Clone the repository to your local machine

```
git clone https://github.com/mtahagocer/singleton-service.git
```

3. Create a new branch for your changes

```
git checkout -b my-feature-branch
```

4. Make your changes and commit them
5. Push your branch to GitHub

```
git push origin my-feature-branch
```

6. Create a new pull request (PR)

## Guidelines

Make sure your code adheres to the existing code style and conventions.

Write tests for your changes.

Make sure your changes don't break the existing tests.

Run the linter and make sure it passes.

Document your changes in the `CHANGELOG.md` and the `README.md` if necessary


# Licensing

This project is licensed under the [MIT License](https://chat.openai.com/LICENSE).

React and Axios are both licensed under the [MIT License](https://chat.openai.com/LICENSE) which is permissive open-source license that allows you to use, modify, and distribute the software for any purpose, including commercial use.

Please note that the license and the information in this section must be updated according to the package and the developer's choice.
