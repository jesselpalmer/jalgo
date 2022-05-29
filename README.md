![cs.js action](https://github.com/jesselpalmer/cs.js/workflows/cs.js%20action/badge.svg)
[![codecov](https://codecov.io/gh/jesselpalmer/cs.js/branch/master/graph/badge.svg)](https://codecov.io/gh/jesselpalmer/cs.js)

# cs.js

Algorithms and data structures in JavaScript

## Installation
  
  ```
  npm install cs.js
  ```

## Usage

The only data structure that is available right now is `Stack`. Avaiable methods are `clear()`, `isEmpty()`, `peek()`, `push()`, `size()`, `toString()`. More will added in time.
  
  ```javascript
  // es5
  const Stack = require('cs.js')

  // es6
  import Stack from 'cs.js'

  const stack = new Stack()
  stack.isEmpty() // will return true
  ```

## Tests

  ```
  npm test
  ```

## Contributing

Pull requests are welcome! Please make sure that any new or changed functionality need to have unit tests accompanied with the PR. Make sure that you lint (`npm run lint`) and test your code (`npm test`).
  