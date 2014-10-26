/**
 * Set up rules for file concatenation
 *
 **/

'use strict';

module.exports = function (grunt) {

  grunt.config.set('concat', {
    options: {
      process: function(src, filepath) {
        if (filepath.substr(filepath.length - 2) === 'js') {
          return '// Source: ' + filepath + '\n' +
            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
        } else {
          return src;
        }
      }
    },

    angular: {
      src: [
        'lib/angular/angular.js', 
        'lib/angular-resource/angular-resource.js', 
        'lib/angular-route/angular-route.js',  
        'lib/angular-animate/angular-animate.js', 
        'lib/angular-bootstrap/ui-bootstrap.js', 
        'lib/angular-bootstrap/ui-bootstrap-tpls.js', 
        'lib/angular-ui-utils/ui-utils.js', 
        'lib/ngprogress/ngProgress.js', 
        'lib/angular-moment/angular-moment.js',
      ],
      dest: 'public/js/angularjs-all.js'
    },

    css: {
      src: [
        'lib/bootstrap/bootstrap.css',
        'lib/cal-heatmap/cal-heatmap.css',
        'src/css/**/*.css'
      ],
      dest: 'public/css/main.css'
    },

    main: {
      src: [
        'src/js/app.js', 
        'src/js/controllers/*.js', 
        'src/js/services/*.js', 
        'src/js/directives.js', 
        'src/js/filters.js', 
        'src/js/config.js', 
        'src/js/init.js', 
        'src/js/translations.js'
      ],
      dest: 'public/js/main.js'
    },

    vendors: {
      src: [ 
        'lib/d3/d3.js',
        'lib/cal-heatmap/cal-heatmap.js',
        'lib/moment/moment.js',
        'lib/socket.io-client/socket.io.js'
      ],
      dest: 'public/js/vendors.js'
    },

  });

};
