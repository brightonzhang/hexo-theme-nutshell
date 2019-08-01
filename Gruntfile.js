module.exports = function(grunt) {  
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        compressjs: {
          files: {
            'source/js/script.min.js': ['source/js/script.js']
          }
        }
      },

      jshint: {
        all: ['source/js/script.js']
      },

      watch: {
        scripts: {
          files: ['source/js/script.js'],
          tasks: ['jshint','uglify']
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('compressjs',['jshint','uglify']);
    grunt.registerTask('watchit',['jshint','uglify','watch']);
    grunt.registerTask('default',['jshint','uglify','watch']);
  
  };