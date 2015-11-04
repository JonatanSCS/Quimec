module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   
    jade: {
      debug: {
        options: {
          data: {
          debug: true
          }
        },
        files: {
          'index.html': 'index.jade',
          'html/quienes-somos.html':'html/quienes-somos.jade',
          'html/contacto.html':'html/contacto.jade',
          'html/servicios.html':'html/servicios.jade',
          'html/proyectos.html':'html/proyectos.jade'
        }

      } 
    },

    stylus:{
      debug: {
        options: {
          data: {
          debug: true
          }
        },
        files: {
          'css/style.css': 'css/style.styl'
        }
      } 
    },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8000,
          keepalive: true
        }
      }
    },
    watch: {
            stylesheets: {
                files: ['css/style.styl',
                        'index.jade',
                        'html/quienes-somos.jade',
                        'html/contacto.jade',
                        'html/servicios.jade',
                        'html/proyectos.jade'],

                tasks: ['stylus','jade'],
                options: {
                    interrupt: true
                }
            }
        },
  });



  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');


  grunt.registerTask('default', ['jade', 'stylus', 'watch']);
  grunt.registerTask('server', ['connect:server']);



};