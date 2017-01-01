module.exports = function(grunt) {

  // Initialisation
    grunt.initConfig({

    // Tâches
    less: {
        // compilation des fichiers LESS
    },
    concat: {
      // Concaténation des fichiers JS et CSS
    },
    uglify: {
      // Minification des fichiers JS
    },
    jshint: {
      // Contrôle de la syntaxe des .js, permet de surveiller des erreurs de syntaxe dans votre code
    },
    watch: {
        // Surveillance de modifications sur les fichiers JS et CSS
      }
    });

  // Chargement des extensions Grunt
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Définition de la tâche par défaut
  grunt.registerTask('default', ['watch']);

};