/**
 * Modules Requires for Gulp
 */

	  const gulp 					= require('gulp'),
			sass 					= require('gulp-sass'),
			sourcemaps 				= require('gulp-sourcemaps'),
			pug  					= require('gulp-pug'),
			autoprefixer 			= require('gulp-autoprefixer'),
			concat 					= require('gulp-concat'),
			uglify 					= require('gulp-uglify'),
			gutil 					= require('gulp-util'),
			browserify 				= require('browserify'),
			babelify 				= require('babelify'),
			source 					= require('vinyl-source-stream'),
			buffer					= require('vinyl-buffer'),
			browserSync 			= require('browser-sync').create();


/***************************************************************************************************
 ******************* PATHS *************************************************************************/

			// Sources

			var pathSource = {
				root:   'src/',
				css:    'src/scss/',
				js:     'src/js/'
			}

			// Production

			var pathDest = {
				root:   'public/',
				css:    'public/css',
				js:     'public/js',
				maps:   'public/maps'
			}

/**************************************************************************************************
 ***************************************************************************************************/

				/**
				 * Default Task
				 */
				gulp.task('default', function(){
						browserSync.init({
							server: pathDest.root
						});

						gulp.watch(pathSource.root + "**/*.pug", ['html']).on("change", browserSync.reload);
						gulp.watch(pathSource.css + "**/*.scss", ['sass']);
						gulp.watch(pathSource.js + "*.js", ['js']);

				});


				/**
				* Pug Task
				*/

					gulp.task('html', function() {
							gulp.src(pathSource.root + "*.pug")
								.pipe(pug({
									pretty: true
								}))
								.pipe(gulp.dest(pathDest.root));
					});


					/**
				 	* Sass Task
				 	*/

					gulp.task('sass', function(){
						gulp.src(pathSource.css + "*.scss")
							.pipe(sourcemaps.init())
							.pipe(sass({ 
								outputStyle: 'compressed',
								sourceComments: 'false' 
							})
								.on('error', sass.logError)
							)
							.pipe(autoprefixer({
								versions: ['last 2 browsers']
							}))
							.pipe(sourcemaps.write('./maps'))
							.pipe(gulp.dest(pathDest.css))
							.pipe(browserSync.stream());
					});


					/**
					* Js Task
					*/

					gulp.task('js', function() {
						return browserify({entries: pathSource.js + 'app.js', debug: true})
							.transform("babelify", { presets: ["es2015"] })
							.bundle()
							.pipe(source('app.js'))
							.pipe(buffer())
							.pipe(sourcemaps.init())
							.pipe(uglify())
							.pipe(sourcemaps.write('./maps'))
							.pipe(gulp.dest(pathDest.js));
					});