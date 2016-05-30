const gulp = require('gulp')
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const webpack = require('webpack')
const stream = require('webpack-stream')
const reload = require('gulp-livereload')

gulp.task('sass', function() {
  gulp.src('./app/styles/main.scss')
      .pipe(sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError))
      .pipe(prefix({
        browsers: ['> 1%'],
        cascade: false
      }))
      .pipe(gulp.dest('./styles'))
      .pipe(reload())
})

gulp.task('js', function() {
  gulp.src('./app/index.js')
      .pipe(stream({
        output: {
          filename: 'bundle.min.js'
        },
        module: {
          loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw'}
          ]
        },
        plugins: [
          new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
          }),
          new webpack.optimize.DedupePlugin()
        ]
      }, webpack))
      .pipe(gulp.dest('./'))
      .pipe(reload())
})

gulp.task('watch', function() {
  reload.listen()
  gulp.watch(['app/**/*.js', 'app/**/*.html'], ['js'])
  gulp.watch('app/styles/**/*.scss', ['sass'])
})

gulp.task('default', ['sass','js','watch'])
