'use strict';
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*!\n' +
                '* <%= pkg.name %>\n' +
                '* v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                '* (c) <%= pkg.author %>\n' +
                '* <%= pkg.license %> License\n' +
                '*/\n'
        },
        concat: {
            options: {
                banner: '<%= meta.banner %>'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.js': 'src/<%= pkg.name %>.js'
                }
            }
        },
        uglify: {
            options: {
                banner: '<%= meta.banner %>'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': 'src/<%= pkg.name %>.js'
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'src/<%= pkg.name %>.js'
            ]
        },
        build: {
            tasks: ['default'],
            packageConfig: 'pkg',
            packages: '*.json',
            jsonSpace: 4,
            jsonReplacer: undefined,
            gitAdd: 'dist *.json'
        }
    });

    grunt.registerTask('default', [
        'jshint',
        'concat',
        'uglify'
    ]);
    grunt.registerTask('release', [
        'build:patch:auto-version'
    ]);
    grunt.registerTask('release:minor', [
        'build:minor:auto-version'
    ]);
    grunt.registerTask('release:major', [
        'build:major:auto-version'
    ]);
};
