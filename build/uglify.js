/**
 * Minify JavaScript assets
 *
 **/

'use strict';

module.exports = function (grunt) {
  grunt.config.set('uglify', {
    options: {
      banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n',
      mangle: false
    },
    vendors: {
      src: 'public/js/vendors.js',
      dest: 'public/js/vendors.min.js'
    },
    angular: {
      src: 'public/js/angularjs-all.js',
      dest: 'public/js/angularjs-all.min.js'
    },
    main: {
      src: 'public/js/main.js',
      dest: 'public/js/main.min.js'
    }
  });
};
