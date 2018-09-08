---
layout: post
title: Finding an element in the array (the ES5, ES6 and ES7 way)
date: 2018-08-26 13:32:20 +0300
description: Different ways of finding an element in an array
img: js-array.jpeg
tags: [javascript, webdev, arrays]
---
This'll be a quick one.

Say you want to check if a specific element exists in an array. There's a couple of ways to do that:

## ES5
### `indexOf()`
`indexOf` returns the index of the first matching item found, or `-1` if not found.
```javascript
// check if a Fortnite ninja exists in the array
const ninjas = ['Alchemist', 'Brawler', 'Skirmisher', 'Harvester']

console.log(ninjas.indexOf('Brawler')) // 1
console.log(ninjas.indexOf('Harvester')) // 3
console.log(ninjas.indexOf('Assassin')) // -1 (doesn't exist)
```

### `lastIndexOf()`
`lastIndexOf()` returns the index of the last matching item found, or `-1` if not found.
```javascript
// check if a Fortnite ninja exists in the array
// note that 'Brawler' exists twice
const ninjas = ['Alchemist', 'Brawler', 'Skirmisher', 'Harvester', 'Brawler', 'Stonefoot']

console.log(ninjas.lastIndexOf('Brawler')) // 4 (last one returned)
console.log(ninjas.lastIndexOf('Harvester')) // 3
console.log(ninjas.lastIndexOf('Assassin')) // -1 (doesn't exist)
```

## ES6
### `find()`
The `find()` method returns the **value** of the **first** element in the array that satisfies the provided testing function. Otherwise undefined is returned.
```javascript
const ninjas = [
                {name: 'Alchemist'}, 
                {name: 'Brawler'}, 
                {name: 'Skirmisher'}, 
                {name: 'Harvester'}
               ]

console.log(ninjas.find(ninja => ninja.name === 'Harvester')); // {name: "Harvester"}
console.log(ninjas.find(ninja => ninja.name === 'Assassin')); // undefined
```

### `findIndex()`
Returns the **index** of the **first** element in the array that satisfies the provided testing function. Otherwise -1 is returned.
```javascript
const ninjas = [
                {name: 'Alchemist'}, 
                {name: 'Brawler'}, 
                {name: 'Skirmisher'}, 
                {name: 'Harvester'}
               ]

console.log(ninjas.findIndex(ninja => ninja.name === 'Harvester')); // 3
console.log(ninjas.findIndex(ninja => ninja.name === 'Assassin')); // -1
```

## ES7
### `includes()`
The `includes()` method determines whether an array includes a certain element, returning true or false as appropriate. For example, `a.includes(value)` returns `true` if `a` contains `value`
```javascript
const ninjas = ['Alchemist', 'Brawler', 'Skirmisher', 'Harvester']

console.log(ninjas.includes('Brawler')); // true
console.log(ninjas.includes('Assassin')); // false
```
`a.includes(value, i)` returns true if `a` contains `value` **after (or at) the position `i`**
```javascript
const ninjas = ['Alchemist', 'Brawler', 'Skirmisher', 'Harvester']

console.log(ninjas.includes('Skirmisher', 1)); // true
console.log(ninjas.includes('Skirmisher', 2)); // true
console.log(ninjas.includes('Skirmisher', 3)); // false
```