---
layout: post
title: Javascript lookaheads and lookbehinds
date: 2018-08-29
description: A look at javascript regex lookaheads and lookbehinds
img: regex.png
tags: [javascript, coding, regex, webdev] # add tag
---
Regular expressions (also called regex) are patterns used to match character combinations in strings. They help us work with strings in a very performant way.

By formulating regex with a special syntax, you can:
* search text in a string
* replace substrings in a string
* extract information from a string

If all this is completely new to you, take a look at the [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) for more info. 

For this post, I'll focus on one of the easier (and very useful) ways you can use regex.

## Lookaheads: match a string depending on what follows it
### Format: `x(?=y)`
`x(?=y)` matches 'x' only if 'x' is followed by 'y'.
Let's see an example:
```javascript
// check to see if we have the right 'Kanye'
// /Kanye(?= West)/ : the string 'Kanye' must be followed by 'West'

/Kanye(?= West)/.test('I heard Kanye will be performing tonight') // false. we cant really be sure it's the right Kanye
/Kanye(?= West)/.test('I heard Kanye East will be performing tonight') // false. Kanye who???
/Kanye(?= West)/.test('I heard Kanye West will be performing tonight') // true
```
You can also do `/Kanye(?= West | East)/` to match Kanye if it's followed by either 'East' or 'West'.

### Format: `x(?!y)`
`x(?!y)` performs the inverse operation, matching 'x' only if 'x' is **not** followed by 'y'. This is called a negated lookahead.
```javascript
// we want a different 'Kanye'
// /Kanye(?! West)/ : the string 'Kanye' must not be followed by 'West'

/Kanye(?! West)/.test('I heard Kanye will be performing tonight') // true. might be West, but I'll just take the risk and see
/Kanye(?! West)/.test('I heard Kanye East will be performing tonight') // true. let's give the new guy a chance
/Kanye(?! West)/.test('I heard Kanye West will be performing tonight') // false 
```

## Lookbehinds: match a string depending on what precedes it
**This is an [ES2018](https://github.com/tc39/proposal-regexp-lookbehind) feature** 🎉🎊🚀🎸🤘🏾
### Format: `(?<=y)x`
`(?<=y)x` matches 'x' only if it's preceded by 'y' 
```javascript
// check to see if we have the right 'Kanye West'
// /(?<= Kanye) West/ : the string 'West' must be preceded by 'Kanye'

/(?<= Kanye) West/.test('I heard West will be performing tonight') // false. we cant really be sure it's the right West 
/(?<= Kanye) West/.test('I heard Keith West will be performing tonight') // false 
/(?<= Kanye) West/.test('I heard Kanye West will be performing tonight') // true
```

### Format: `(?<!y)x`
`(?<!y)x` matches 'x' only if it's **not** preceded by 'y'
```javascript
// check to see if we have another 'West'
// /(?<= Kanye) West/ : the string 'West' must be not be preceded by 'Kanye'

/(?<! Kanye) West/.test('I heard West will be performing tonight') // true 
/(?<! Kanye) West/.test('I heard Keith West will be performing tonight') // true 
/(?<! Kanye) West/.test('I heard Kanye West will be performing tonight') // false
```

There you have it 😄. Regex might be a bit hard to master, but once you do, you'll find that it makes working with strings so much easier. Let me know of some other cool ways you've been using regex.