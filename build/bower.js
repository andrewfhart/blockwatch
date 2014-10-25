/**
 * Install front-end JavaScript dependencies managed by Bower
 *
 **/

'use strict';

module.exports = function (grunt) {
  grunt.config.set('bower', {
    install: {
      options: {
        targetDir: 'lib',
        layout: 'byType',
        install: true,
        verbose: false,
        cleanTargetDir: true,
        cleanBowerDir: true,
        bowerOptions: {}
      }
    }
  });
}
