module.exports = function(grunt) {
  grunt.initConfig({
    plato: {
      options: {
        //jshint: grunt.file.readJSON('.jshintrc'),
        jshint: false,
        complexity: {
          logicalor: true,
          switchcase: true,
          forin: true,
          trycatch: true
        }
      },
      dist: {
        files: {
          'docs/report/plato': ['routes/**/*.js']
        }
      }
    }   
  });
  grunt.loadNpmTasks('grunt-plato');
}; 
