module.exports = function(grunt){

    grunt.initConfig({

        clean: {

            tmp: {
                src: ['.tmp/**/*']
            },

            images: {
                src: ['.tmp/images/**/*']
            },

            js: {
                src: ['.tmp/js/**/*']
            },

            css: {
                src: ['.tmp/css/**/*']
            }

        },

        concat: {

            js: {
                src: ['src/js/**/*'],
                dest: '.tmp/js/scripts.min.js'
            },

            css: {
                src: ['src/css/reset.css', 'src/css/global.css', 'src/css/index.css', 'src/css/produtos.css', 'src/css/contato.css', 'src/css/mediaqueries.css'],
                dest: '.tmp/css/styles.min.css'
            }
        },

        cssmin: {
            css: {
                files: {
                    '.tmp/css/styles.min.css': '.tmp/css/styles.min.css'
                }
            }
        },

        uglify: {
            js: {
                files: [{
                    src: '.tmp/js/scripts.min.js',
                    dest: '.tmp/js/scripts.min.js'
                }]
            }
        },

        image: {
            
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: '.tmp/images/'
                }]
            }
        }

    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-image');

};