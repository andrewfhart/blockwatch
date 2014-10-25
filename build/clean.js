/**
 * Set up rules for cleaning the workspace
 *
 **/

'use strict';

module.exports = function (grunt) {
  grunt.config.set('clean', {
    all: [
      'lib',
      'public'
    ]
  });
};
