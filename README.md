# Example of JavaScript Dependency Injection

Dependency injection is where an object supplies dependencies
for another object. In this example project some CommonJS modules,
such as unit tests, are able to override `require()` dependencies
of other modules in the project.

## How it works?

Every module imports other modules using the project root `index.js`
file which is the central hub for all required modules.

The root `index.js` file exports an object with lazy loaded `require`
statements. And the results of these statements can be overriden using
arguments to `Object.assign()`.

For example,
* `thirdparty/index.js` is a module that exports `{ debug }`
* `src/index.js` is a module that exports `{ Widget }`
* In a unit test, we want to override `debug` with a mock.
* In the unit test, before importing the `Widget`, we override `debug` like so:

```javascript
const sinon = require('sinon')
const { debug: createDebug } = require('../index').thirdparty({ debug: sinon.stub() })
const { Widget } = require('../index').app()
```

Because the root `index.js` module is cached by the `require.cache`, its returned
keys such as `debug` are now cached with the new `sinon.stub()` object instead of
the original `debug` module. Allowing the unit test to check calls on `debug()`.

The syntax that allows this, in the root `index.js` file, looks like this -

```javascript
module.exports = {
    app: (inject) => Object.assign(require('./src'), inject),
    thirdparty: (inject) => Object.assign(require('./thirdparty'), inject),
}
```

Should a more involved hierarchy of dependencies be needed, the same pattern
can be extended to do a *deep* `Object.assign` instead of the shallow example.