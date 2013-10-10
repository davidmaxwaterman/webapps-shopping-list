module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-tizen');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadTasks('tools/grunt-tasks');

  grunt.initConfig({
    packageInfo: grunt.file.readJSON('package.json'),
    chromeInfo: grunt.file.readJSON('data/manifest.json'),

    clean: ['build'],

    tizen_configuration: {
      // location on the device to install the tizen-app.sh script to
      // (default: '/tmp')
      tizenAppScriptDir: '/home/developer/',

      // path to the config.xml file for the Tizen wgt file
      // (default: 'config.xml')
      configFile: 'data/config.xml',

      // path to the sdb command (default: process.env.SDB or 'sdb')
      sdbCmd: 'sdb'
    },

    // minify JS
    uglify: {
      dist: {
        files: {
          'build/app/js/main.js': ['app/js/main.js'],
          'build/app/js/AddFromFavoritesView.js': ['app/js/AddFromFavoritesView.js'],
          'build/app/js/AddStoreDialog.js': ['app/js/AddStoreDialog.js'],
          'build/app/js/dbmanager.js': ['app/js/dbmanager.js'],
          'build/app/js/EditItemScreen.js': ['app/js/EditItemScreen.js'],
          'build/app/js/EditListScreen.js': ['app/js/EditListScreen.js'],
          'build/app/js/en_default.js': ['app/js/en_default.js'],
          'build/app/js/FileSystem.js': ['app/js/FileSystem.js'],
          'build/app/js/helper.js': ['app/js/helper.js'],
          'build/app/js/help.js': ['app/js/help.js'],
          'build/app/js/InfoDialog.js': ['app/js/InfoDialog.js'],
          'build/app/js/license.js': ['app/js/license.js'],
          'build/app/js/ListSelectionDialog.js': ['app/js/ListSelectionDialog.js'],
          'build/app/js/Localizer.js': ['app/js/Localizer.js'],
          'build/app/js/main.js': ['app/js/main.js'],
          'build/app/js/OptionsDialog.js': ['app/js/OptionsDialog.js'],
          'build/app/js/PhotoFullScreenView.js': ['app/js/PhotoFullScreenView.js'],
          'build/app/js/scaleBody.js': ['app/js/scaleBody.js'],
          'build/app/js/SortbyDialog.js': ['app/js/SortbyDialog.js'],
          'build/app/js/StoreSelectionDialog.js': ['app/js/StoreSelectionDialog.js'],
          'build/app/js/tizenapplicationservice.js': ['app/js/tizenapplicationservice.js'],
          'build/app/js/scaleBody.js': ['app/js/scaleBody.js']
        }
      }
    },

    // minify CSS
    cssmin: {
      dist: {
        files: {

          'build/app/css/addfromfavorites_view_common.css': ['app/css/addfromfavorites_view_common.css'],
          'build/app/css/addfromfavorites_view_landscape.css': ['app/css/addfromfavorites_view_landscape.css'],
          'build/app/css/addfromfavorites_view_portrait.css': ['app/css/addfromfavorites_view_portrait.css'],
          'build/app/css/addstore_dialog.css': ['app/css/addstore_dialog.css'],
          'build/app/css/edititem_view_common.css': ['app/css/edititem_view_common.css'],
          'build/app/css/edititem_view_landscape.css': ['app/css/edititem_view_landscape.css'],
          'build/app/css/edititem_view_portrait.css': ['app/css/edititem_view_portrait.css'],
          'build/app/css/editlist_view_common.css': ['app/css/editlist_view_common.css'],
          'build/app/css/editlist_view_landscape.css': ['app/css/editlist_view_landscape.css'],
          'build/app/css/editlist_view_portrait.css': ['app/css/editlist_view_portrait.css'],
          'build/app/css/info_dialog.css': ['app/css/info_dialog.css'],
          'build/app/css/listselection_dialog.css': ['app/css/listselection_dialog.css'],
          'build/app/css/options_dialog.css': ['app/css/options_dialog.css'],
          'build/app/css/photofullscreen_view_common.css': ['app/css/photofullscreen_view_common.css'],
          'build/app/css/photofullscreen_view_landscape.css': ['app/css/photofullscreen_view_landscape.css'],
          'build/app/css/photofullscreen_view_portrait.css': ['app/css/photofullscreen_view_portrait.css'],
          'build/app/css/sl_landscape.css': ['app/css/sl_landscape.css'],
          'build/app/css/sl_portrait.css': ['app/css/sl_portrait.css'],
          'build/app/css/ui_common.css': ['app/css/ui_common.css']
        }
      }
    },

    copy: {
      common: {
        files: [
          { expand: true, cwd: '.', src: ['app/lib/**'], dest: 'build/' },
          { expand: true, cwd: '.', src: ['app/audio/**'], dest: 'build/' },
          { expand: true, cwd: '.', src: ['LICENSE'], dest: 'build/app/' },
          { expand: true, cwd: '.', src: ['README.txt'], dest: 'build/app/' },
          { expand: true, cwd: '.', src: ['app/_locales/**'], dest: 'build/' }
        ]
      },
      wgt: {
        files: [
          { expand: true, cwd: 'build/app/', src: ['**'], dest: 'build/wgt/' },
          { expand: true, cwd: 'data/', src: ['config.xml'], dest: 'build/wgt/' },
          { expand: true, cwd: '.', src: ['icon_128.png'], dest: 'build/wgt/' }
        ]
      },
      crx: {
        files: [
          { expand: true, cwd: 'build/app/', src: ['**'], dest: 'build/crx/' },
          { expand: true, cwd: '.', src: ['manifest.json'], dest: 'build/crx/' },
          { expand: true, cwd: '.', src: ['icon*.png'], dest: 'build/crx/' }
        ]
      },
      sdk: {
        files: [
          { expand: true, cwd: 'build/app/', src: ['**'], dest: 'build/sdk/' },
          { expand: true, cwd: 'app/', src: ['js/**'], dest: 'build/sdk/' },
          { expand: true, cwd: 'app/', src: ['css/**'], dest: 'build/sdk/' },
          { expand: true, cwd: 'app/', src: ['*.html'], dest: 'build/sdk/' },
          { expand: true, cwd: 'data/', src: ['config.xml'], dest: 'build/sdk/' },
          { expand: true, cwd: '.', src: ['icon*.png'], dest: 'build/sdk/' }
        ]
      }
    },

    htmlmin: {
      dist: {
        files: [
          { expand: true, cwd: '.', src: ['app/*.html'], dest: 'build/' }
        ],
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeCommentsFromCDATA: false,
          removeCDATASectionsFromCDATA: false,
          removeEmptyAttributes: true,
          removeEmptyElements: false
        }
      }
    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [
          { expand: true, cwd: '.', src: ['app/images/**'], dest: 'build/' }
        ]
      }
    },

    // make wgt package in build/ directory
    package: {
      wgt: {
        appName: '<%= packageInfo.name %>',
        version: '<%= packageInfo.version %>',
        files: 'build/wgt/**',
        stripPrefix: 'build/wgt/',
        outDir: 'build',
        suffix: '.wgt',
        addGitCommitId: false
      },
      sdk: {
        appName: '<%= packageInfo.name %>',
        version: '<%= packageInfo.version %>',
        files: 'build/sdk/**',
        stripPrefix: 'build/sdk/',
        outDir: 'build',
        suffix: '.wgt',
      }
    },

    simple_server: {
      port: 30303,
      dir: 'build/app/'
    },

    tizen: {
      push: {
        action: 'push',
        localFiles: {
          pattern: 'build/*.wgt',
          filter: 'latest'
        },
        remoteDir: '/home/developer/'
      },

      install: {
        action: 'install',
        remoteFiles: {
          pattern: '/home/developer/ShoppingList*.wgt',
          filter: 'latest'
        }
      },

      uninstall: {
        action: 'uninstall'
      },

      start: {
        action: 'start',
        stopOnFailure: true
      },

      stop: {
        action: 'stop',
        stopOnFailure: false
      },

      debug: {
        action: 'debug',
        browserCmd: 'google-chrome %URL%',
        localPort: 9090,
        stopOnFailure: true
      }
    }
  });

  grunt.registerTask('dist', [
    'clean',
    'imagemin:dist',
    'uglify:dist',
    'cssmin:dist',
    'htmlmin:dist',
    'copy:common'
  ]);

  grunt.registerTask('crx', ['dist', 'copy:crx']);
  grunt.registerTask('wgt', ['dist', 'copy:wgt', 'package:wgt']);

  grunt.registerTask('sdk', [
    'clean',
    'imagemin:dist',
    'copy:common',
    'copy:sdk',
    'package:sdk'
  ]);

  grunt.registerTask('perf', [
    'dist',
    'uglify:perf',
    'inline',
    'copy:wgt',
    'package:wgt'
  ]);

  grunt.registerTask('install', [
    'tizen:push',
    'tizen:stop',
    'tizen:uninstall',
    'tizen:install',
    'tizen:start'
  ]);

  grunt.registerTask('wait', function () {
    var done = this.async();
    setTimeout(function () {
      done();
    }, 10000);
  });

  grunt.registerTask('restart', ['tizen:stop', 'tizen:start']);

  grunt.registerTask('server', ['dist', 'simple_server']);

  grunt.registerTask('wgt-install', ['wgt', 'install']);
  grunt.registerTask('sdk-install', ['sdk', 'install']);

  grunt.registerTask('default', 'wgt');
};