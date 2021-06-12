# AlterChrome
A javascript package that makes color logging easier. Based on Chalk!

# Intallation
To install AlterChrome with NPM use:
```
npm i alterchrome --save
```
# Usage
Alternating background and font color in console output:
```javascript
var alterchrome = require('alterchorme');

// assuming primary color is red and secondary is black
console.log(alterchrome.color("string here")); // logs string with red bg and black font 
console.log(alterchrome.color("string here")); // logs string with black bg and red font 
console.log(alterchrome.color("string here")); // logs string with red bg and black font 
console.log(alterchrome.color("string here")); // logs string with black bg and red font 

```

To change Primary color to green:
```javascript
alterchrome.setPrimaryColor("green");
```

To change Secondary color to white:
```javascript
alterchrome.setSecondaryColor("white");
```

# Tips
1. Use npm package `hardlog` with NodeJS, then read hardlogs with `less`.
2. Use only for fast prototyping or mock projects, `alterchrome` is not intended for full-scale development yet. 

