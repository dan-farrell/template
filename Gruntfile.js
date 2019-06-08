module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    sass: {
      options: {sourceMap: true},
      dist: {files: {'styles/main.css': 'styles/scss/main.scss'}}
    },
    watch: {
      styles: {
        files: ['styles/scss/*.scss'],
        tasks: ['sass'],
        options: {nospawn: true}
      }
    },
    browserSync: {
      dev: {
        bsFiles: {src : ['*.css', '*.html', '*.JS']},
        options: {watchTask: true, server: './'}
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('bs', ['sass', 'browserSync', 'watch']);
};
