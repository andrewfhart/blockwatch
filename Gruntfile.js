/*jslint node: true, indent: 2 */

module.exports = function (grunt) {

  var pkg = require('./package.json'),
    devDependencyName = null,
    dependencyName = null;

  // Load the plugins that provide third-party tasks
  for (devDependencyName in pkg.devDependencies) {
    if (devDependencyName.substring(0, 6) === 'grunt-') {
      grunt.loadNpmTasks(devDependencyName);
    }
  }
  for (dependencyName in pkg.dependencies) {
    if (dependencyName.substring(0, 6) === 'grunt-') {
      grunt.loadNpmTasks(dependencyName);
    }
  }

  // Initialize configuration
  grunt.initConfig({
    pkg: pkg
  });

  // Load tasks defined in the 'build' directory
  grunt.loadTasks('build');

  // Register a default task
  grunt.registerTask('default', ['dev']);

  // Do a fresh installation of everything
  grunt.registerTask('init-env', [
    'clean',
    'bower:install'
  ]);

  // Build development environment
  grunt.registerTask('dev', [
    'concat',
    'copy:index',
    'copy:assets'
  ]);

};
