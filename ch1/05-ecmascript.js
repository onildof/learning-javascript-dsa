/*
ECMAScript is a specification. Javascript is an implementation of this specification. And each browser makes its own implementation in fact.
That's why each functionality behavior differs from browser to browser.
So ECMAScript determines the available functionalities for Javascript.
The ECMAScript I'm used to is ECMAScript5, which became a standard in December 2009.

Here are compatibility lists for each browser for ECMAScript standards 6 and 7:

http://kangax.github.io/compat-table/es6/
http://kangax.github.io/compat-table/es2016plus/

If you write code for, say, ECMA7, you won't want to rewrite it to work on ECMA5-only browsers. For that you'll use
a transpiler (aka source-to-source compiler). Such a tool is Babel.js (https://babeljs.io). It converts Javascript code with ES6 and ES7
language features to equivalent code that uses only language features from the widely supported ES5 specification.
*/

