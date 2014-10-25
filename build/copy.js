/**
 * Set up rules for copying files from src to dev
 *
 **/

'use strict';

module.exports = function (grunt) {

  grunt.config.set('copy', {
    options: {
      excludeEmpty: true
    },

    index: {
      files: [{
        dest: 'public',
        cwd: 'src',
        expand: true,
        filter: 'isFile',
        src: [
          'index.html'
        ]
      }]
    },

    index_dev: {
      files: [{
        dest: 'public',
        cwd: 'src',
        expand: true,
        filter: 'isFile',
        src: [
          'index_dev.html'
        ],
        rename: function (dest, src) {
          return dest + '/index.html'
        }
      }]
    },

    assets: {
      files: [{
        dest: 'public',
        cwd: 'src',
        expand: true,
        src: [
          'views/**/*.*'
        ]
      }]
    }
  });
};
