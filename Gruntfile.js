module.exports = function (grunt) {
  require('time-grunt')(grunt)
  require('jit-grunt')(grunt, {
    'newer': 'grunt-newer'
  })

  var babel = require('rollup-plugin-babel')
  var uglify = require('rollup-plugin-uglify')
  var layout = 'sidebar'

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dist: 'dist'
    },

    copy: {
      images: {
        expand: true,
        cwd: 'src/img',
        src: '**/*',
        dest: 'template/static/assets/img'
      },

      vendor: {
        expand: true,
        cwd: 'src/vendor',
        src: '**/*',
        dest: 'template/static/assets'
      },

      tmpl: {
        expand: true,
        cwd: 'src/tmpl',
        src: '**/*',
        dest: 'template/tmpl'
      },

      publish: {
        src: 'src/publish.js',
        dest: 'template/publish.js'
      }
    },

    less: {
      options: {
        strictImports: false,
        strictMaths: true,
        strictUnits: true,
        sourceMap: true,
        modifyVars: {
          layout: layout
        }
      },

      main: {
        options: {
          sourceMapURL: 'main.css.map',
          sourceMapFilename: 'template/static/assets/css/main.css.map',
          sourceMapRootpath: '../../../'
        },
        src: 'src/less/main.less',
        dest: 'template/static/assets/css/main.css'
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('pixrem')({ rootValue: 10 }),
          require('autoprefixer')({ browsers: 'last 2 versions' }),
          require('cssnano')()
        ]
      },

      dist: {
        src: 'template/static/assets/css/*.css'
      }
    },

    rollup: {
      options: {
        moduleName: 'skizz',
        plugins: [babel(), uglify()],
        sourceMap: true,
        format: 'iife'
      },
      skizz: {
        src: 'src/js/main.js',
        dest: 'template/static/assets/js/main.js'
      }
    }
  })

  // define default task
  grunt.registerTask('default', ['clean', 'copy', 'css', 'js'])
  grunt.registerTask('js', ['rollup'])
  grunt.registerTask('css', ['less', 'postcss'])
}
