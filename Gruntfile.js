module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            app: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            html: {
                expand: true,
                cwd: 'client/views',
                src: 'index.html',
                dest: 'server/public/assets/views'
              },
            htmlRoutes: {
                expand: true,
                cwd: 'client/views/routes',
                src: '*.html',
                dest: 'server/public/assets/views/routes'
            },
            css: {
                expand: true,
                cwd: 'client/styles',
                src: 'stylesheet.css',
                dest: 'server/public/assets/styles'
            },
            cssNormalize: {
                expand: true,
                cwd: 'node_modules',
                src: 'normalize.css/normalize.css',
                dest: 'server/public/vendors'
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    'bootstrap/dist/css/bootstrap.min.css',
                    'bootstrap/dist/css/bootstrap.min.css.map'
                ],
                dest: 'server/public/vendors/bootstrap'
            },
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    'angular/angular.min.js',
                    'angular/angular.min.js.map',
                    'angular-route/angular-route.min.js',
                    'angular-route/angular-route.min.js.map',
                    'angular-animate/angular-animate.min.js',
                    'angular-animate/angular-animate.min.js.map',
                    'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'
                ],
                dest: 'server/public/vendors'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};
