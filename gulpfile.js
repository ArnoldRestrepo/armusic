/**
 * Modules Requires for Gulp
 */

const gulp 							= require('gulp'),
			sass 							= require('gulp-sass'),
			pug  							= require('gulp-pug'),
			autoprefixer 			= require('gulp-autoprefixer'),
			concat 						= require('gulp-concat'),
			uglify 						= require('gulp-uglify'),
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
				js:     'public/js'
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

						gulp.watch(pathSource.root + "*.pug", ['html']).on("change", browserSync.reload);
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
							.pipe(sass({
								outputStyle: 'expanded',
								sourceComments: false
							}))
							.pipe(autoprefixer({
								versions: ['last 2 browsers']
							}))
							.pipe(gulp.dest(pathDest.css))
							.pipe(browserSync.stream());
					});


					/**
					* Js Task
					*/

					gulp.task('js', function() {
							gulp.src(pathSource.js + '*.js')
								.pipe(uglify())
								.pipe(gulp.dest(pathDest.js));
							
							browserSync.reload();
					});