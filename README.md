[![Build Status](https://travis-ci.org/jesselpalmer/cs.js.svg?branch=master)](https://travis-ci.org/jesselpalmer/cs.js)
[![Coverage Status](https://coveralls.io/repos/github/jesselpalmer/cs.js/badge.svg?branch=master)](https://coveralls.io/github/jesselpalmer/cs.js?branch=master)

# cs.js

CS algorithms and data structures in JavaScript

## Installation
  
  ```
  npm install cs.js
  ```

## Usage

Text that you would like to convert into emojis must be surrounded by colons, like `:smile:`.
  
  ```js
  // es5
  const emojify = require('cs.js')

  // es6
  import Stack from 'cs.js'

  const stack = new Stack()
  stack.isEmpty() // will return true
  ```

The only data structure that is available right now is `Stack`. Avaiable methods are `clear()`, `isEmpty()`, `peek()`, `push()`, `size()`, `toString()`. More will added in time.

## Tests

  ```
  npm test
  ```

## Contributing

Pull requests are welcome! Please make sure that any new or changed functionality need to have unit tests accompanied with the PR. Make sure that you lint (`npm run lint`) and test your code (`npm test`).
  