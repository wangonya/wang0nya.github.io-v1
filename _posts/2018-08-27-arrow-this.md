---
layout: post
title: this and arrow functions
date: 2018-08-27 +0300
description: How 'this' works in arrow functions
img: this.png
tags: [javascript, webdev, functions]
---
Arrow functions were introduced in ES6 as a new syntax for writing Javascript functions. Thanks to their short syntax, they encourage the use of small functions, which make code look cleaner (and `() =>` just looks cooler 😄).

As a beginner just getting to wrap my head around ES6 syntax, I began using arrow functions **everywhere** without really understanding how they worked. As you might expect, I ended up running into some problems, especially with the `this` keyword.

`this` can get a bit confusing sometimes as its value varies depending on the function's execution context, and on the mode (strict or non-strict). Much has been written about the ins and outs of that so I'll just focus on one thing:

## How `this` works in arrow functions
In a regular function, `this` refers to the object when defined as a method of an object. We can therefor do:
```javascript
const brunch = {
    food: 'Dim sum',
    beverage: 'Jasmine tea',
    order: function() {
        return `I'll have the ${this.food} with ${this.beverage} please.`
    }
}
```
Calling `brunch.order()` will return `"I'll have the Dim sum with Jasmine tea please."`

Let's edit that and use an arrow function for `order:`:
```javascript
const brunch = {
    food: 'Dim sum',
    beverage: 'Jasmine tea',
    order: () => {
        return `I'll have the ${this.food} with ${this.beverage} please.`
    }
}
```
This time, calling `brunch.order()` returns `"I'll have the undefined with undefined please."` Both `this.food` and `this.beverage` return `undefined`.

It worked with the normal function, so what's going on? In the normal function, `this` was our `order` object. When using an arrow function, `this` is not bound to anything and it just inherits from the parent scope which in this case is the window. Adding a `console.log(this)` before the `return` in the arrow function returns a `Window` object, so its looking for `Window.food` and `Window.beverage` which will obviously both be `undefined`.

Arrow functions are therefor not suited as object methods.

Another common problem area would be with event handlers. Here's an example:
```html
// change button colour on click
<style>
.on {background: red;}
</style>

<button id="click">Toggle</button>

<script>
const button = document.querySelector('#click');
button.addEventListener('click', function() {
    console.log(this); // button
    this.classList.toggle('on');
});
</script>
```
In the code above, `this` refers to the button. Clicking on the button toggles the colour as expected. Change the function to an arrow function:
```html
// change button colour on click
<style>
.on {background: red;}
</style>

<button id="click">Toggle</button>

<script>
const button = document.querySelector('#click');
button.addEventListener('click', () => {
    console.log(this); // Window { ... }
    this.classList.toggle('on');
});
</script>
```
and `this` becomes the browser's `window` attribute. Clicking the button will give a `TypeError` error. If you rely on `this` in an event hanlder, a regular function may be necessary.

So, as cool and popular as arrow functions may be, its best to understand how they work, and to know when to and not to use them.