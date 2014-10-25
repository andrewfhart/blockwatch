/**
 * Minify CSS assets
 *
 **/

'use strict';

module.exports = function (grunt) {
  grunt.config.set('cssmin', {
    css: {
      src:  'public/css/main.css',
      dest: 'public/css/main.min.css'
    }
  });
};
