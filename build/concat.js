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
        'lib/angular/angular.min.js', 
        'lib/angular-resource/angular-resource.min.js', 
        'lib/angular-route/angular-route.min.js', 
        'lib/angular-qrcode/qrcode.js', 
        'lib/angular-animate/angular-animate.min.js', 
        'lib/angular-bootstrap/ui-bootstrap.js', 
        'lib/angular-bootstrap/ui-bootstrap-tpls.js', 
        'lib/angular-ui-utils/ui-utils.min.js', 
        'lib/ngprogress/build/ngProgress.min.js', 
        'lib/angular-gettext/dist/angular-gettext.min.js', 
        'lib/angular-moment/angular-moment.min.js'
      ],
      dest: 'public/js/angular-all.js'
    },

    css: {
      src: [
        'lib/bootstrap/dist/css/bootstrap.min.css', 
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
        'lib/momentjs/min/moment.min.js'
      ],
      dest: 'public/js/vendors.js'
    },

  });

};
