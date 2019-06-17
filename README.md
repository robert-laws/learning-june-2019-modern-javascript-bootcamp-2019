# Learning - Udemy: ES6 Javascript Development

[Website for Course](https://learning-june-2019-es6-javascript.netlify.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a046cd90-865a-4dd7-bc74-2fb968df3a4c/deploy-status)](https://app.netlify.com/sites/learning-june-2019-es6-javascript/deploys)

## ES6 and ES2015

Both names are for the same thing, the 2015 implementation of the ECMAScript standard.

## Two types of changes within ES6

1. Syntactic Sugar - reduced amount of code written
2. New Features - add new functionality to JavaScript

## Array Helper Methods

* forEach
* map
* filter
* find
* every
* some
* reduce

### forEach

```javascript
const numbers = [2, 4, 6, 8, 10];
let sum = 0;

numbers.forEach(function(number) {
  sum += number; // sum = 30;
});
```
