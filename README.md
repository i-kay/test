# mypluralize

A Node.js module that returns the plural form of any noun

## Installation

```sh
npm install test-i-kay --save
```

## Usage

### Javascript

```javascript
var pluralise = require('mypluralize');
var boys = pluralise.getPlural('Boy');
```

```sh
Output should be 'Boys'
```

### TypeScript

```typescript
import { getPlural } from 'mypluralize';
console.log(getPlural('Goose'));
```

```sh
Output should be 'Geese'
```

### AMD

```javascript
define(function (require, exports, module) {
    var pluralise = require('mypluralize');
});
```

## Test

```sh
npm run test
```
