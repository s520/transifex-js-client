# transifex-api

This is a universal codebase (works on browser and server) that implements a client
for the Transifex API. It is written in ES6 and it can be used either as a Node
module by linking the src directory or as browser api client by building the codebase
through webpack and using the minified js file in the dist folder.

The client is Promise based and has no external dependencies as AJAX is handled through superagent.

## Installation

Not yet

```
npm install --save transifex-api
```

Until its published you can use it as follows:

```
git clone https://github.com/transifex/transifex-js-client
cd transifex-js-client
npm link
```

And inside your app:

```
cd myApp
npm link transifex-js-client
```


## Usage

In node:

```js
var txApi = require('transifex-js-client').connect({
  tx_user: '',
  tx_pass: '',
  tx_base_url: 'http://tx.loc:8000/',
})
```

In browser:

```js
var txApi = TransifexApi.connect({
  tx_user: '',
  tx_pass: '',
  tx_base_url: 'http://tx.loc:8000/',
});
```

## Development

Install dependencies: `npm install`

- `npm run build` - Build task that generates the browser library;
- `npm run test-node` - Run Mocha tests once server side;
- `npm run test-browser` - Run Mocha tests in the browser using Karma once;
- `npm run test` - Shortcut for `npm run test-node && npm run test-browser`;
- `npm run tdd` - Run Mocha tests & watch files for changes;
- `npm run coverage` - Run Isparta, a code coverage tool;
- `npm run jsdoc` - Generate documentation;


[travis-url]: https://travis-ci.org/alexpsi/transifex-api
[travis-image]: https://img.shields.io/travis/alexpsi/transifex-api.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/alexpsi/transifex-api
[coveralls-image]: https://img.shields.io/coveralls/alexpsi/transifex-api.svg?style=flat-square

[depstat-url]: https://david-dm.org/alexpsi/transifex-api
[depstat-image]: https://david-dm.org/alexpsi/transifex-api.svg?style=flat-square
