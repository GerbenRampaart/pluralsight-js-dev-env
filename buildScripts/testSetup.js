// This files isn't transpiled, so must use CommonJs and ES5

// regiter babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand,
require.extensions['.css'] = function() { }; 