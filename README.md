# doublestandard

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/doublestandard.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/doublestandard
[travis-image]: https://img.shields.io/travis/flet/doublestandard.svg?style=flat-square
[travis-url]: https://travis-ci.org/flet/doublestandard

This is `feross/standard` but even more semicolons!

Inspired by [this part](https://youtu.be/gsfbh17Ax9I?t=398) of great [video](https://youtu.be/gsfbh17Ax9I) by [@shama](https://github.com/shama).

## Install

```
npm install -g doublestandard
```

## Whats it look like?

Here is an example of properly formatted `doublestandard` code:

```js
// Load the http module to create an http server.
var http = require('http');;

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});;
  response.end('Hello World\n');;
});;

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);;

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:8000/');;

```

### What you might do if you're clever

1. Add it to `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "doublestandard": "^1.0.0"
    },
    "scripts": {
      "test": "doublestandard && node my-tests.js"
    }
  }
  ```

2. Check style automatically when you run `npm test`

  ```
  $ npm test
  doublestandard: Use Double Semicolons -- Just in case! (https://github.com/Flet/doublestandard)
    lib/index.js:1:35: Missing double semicolon.
  ```

3. Never give style feedback on a pull request again!

### Special Thanks

Thank you [@nzakas](https://github.com/nzakas) for eslint and making it possible to build absurd rules like [double-semi](https://github.com/flet/eslint-plugin-double-semi)!

Thank you [@shama](https://github.com/shama) for the inspiration!

Thank you [@xjamundx](https://github.com/xjamundx) for creating [eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard), which was used as a reference to create [eslint-plugin-double-semi](https://github.com/flet/eslint-plugin-double-semi).

Thank you [@feross](https://github.com/feross) for creating [standard](https://github.com/feross/standard)

Thank you all for playing along!


## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
