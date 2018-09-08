---
layout: post
title: Javascript array iteration with some() and every()
date: 2018-08-28
description: using 'some()' and 'every()' to iterate arrays
img: iterate.png
tags: [javascript, arrays, beginners, webdev]
---
If you're using an array in your code, chances are, you'll need to iterate over the values in the array. There's a couple of ways you can do that, some better and more efficient than others depending on what you want to accomplish.

For this post, I'll focus on two ways: `some()` and `every()`.

## `some()`
The `some()` method tests whether **at least one** element in the array passes the test implemented by the provided function. It checks the elements one by one, and if it finds an array element where the function returns a truthy value, `some()` returns `true` and does not check the remaining values. Otherwise it returns `false`.

Lets say you want to check if a contact exists in your contact list:
```javascript
const contacts = ['Stewie', 'Meg', 'Quagmire', 'Cleveland'];

function checkContacts(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkContacts(contacts, 'Lois');   // false
checkContacts(contacts, 'Meg'); // true
```
When checking for `Lois`, `some()` checks the array elements beginning at `Stewie` to the end, and having not found a match, returns `false`. When checking for `Meg`, it stops at `Meg` and returns `true`, ignoring the rest of the elements.

## `every()`
This method tests whether **all** elements in the array pass the test implemented by the provided function. It checks the elements one by one, and if it finds an array element where the function returns a falsy value, `every()` returns `false` and does not check the remaining values. Otherwise it returns `true`.

Lets check if all the names in our contacts list have more than 3 characters:
```javascript
['Stewie', 'Meg', 'Quagmire', 'Cleveland'].every(contact => contact.length >= 4); // false
['Stewie', 'Megan', 'Quagmire', 'Cleveland'].every(contact => contact.length >= 4); // true
```
The first test returns `false` since `Meg` has only 3 characters. Remember: for `every()`, *all* the elements in the array have to be truthy for it to return `true`. Changing `Meg` to `Megan` in the second test therefore returns `true`.

These two methods can come in handy if you need to perform somewhat similar tasks as described above. But of course, they're not the only way. Hope someone finds this useful! :)