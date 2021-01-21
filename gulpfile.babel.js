/**
 *
 *  fSD Theme
 *  Copyright 2020 fSD. All rights reserved.
 *
 */

'use strict';

import del from 'del';
import browserSync from 'browser-sync';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import connect from 'gulp-connect-php';
import pkg from './package.json';

const
    srcRoot = 'src',
    nodeRoot = 'node_modules',
    distRoot = 'bundles',
    $ = gulpLoadPlugins(),
    reload = browserSync.reload,
    banner = ['/**',
        ' * <%= pkg.description %>',
        ' * @version v<%= pkg.version %>',
        ' * @license <%= pkg.license %>',
        ' * @copyright 2020 fSD',
        ' * @link https://f-leader.fsd.rs',
        ' */',
        ''].join('\n'),
    AUTOPREFIXER_BROWSERS = [
        'last 2 versions'
    ],
    SOURCES = [
        nodeRoot + '/jquery/dist/jquery.js',
        srcRoot + '/scripts/src/script.js'
    ];

gulp.task('mocha', () => {
    return gulp.src(srcRoot + '/test/**/*.js', { read: false })
        .pipe($.mocha({reporter: 'spec'}));
});

// Lint JavaScript
gulp.task('lint', () => {
    return gulp.src([
        srcRoot + '/scripts/src/script.js',
        'gulpfile.babel.js'
    ])
        .pipe(reload({stream: true, once: true}))
        .pipe($.eslint())
        .pipe($.eslint.format());
});

// Clean Images
gulp.task('clean:images', () => del(distRoot + '/images/*/*'));

// Minify Images
gulp.task('images:min', gulp.series('clean:images', () => {
    return gulp.src(srcRoot + '/images/*/**')
        .pipe($.imagemin())
        .pipe(gulp.dest('bundles/images'));
}));

// Sass Lint
gulp.task('sass-lint', () => {
    return gulp.src(srcRoot + '/styles/scss/**/*.scss')
        .pipe($.sassLint())
        .pipe($.sassLint.format())
        .pipe($.sassLint.failOnError());
});

// Compile and Automatically Prefix Stylesheets (dev)
gulp.task('styles:dev', () => {
    return gulp.src(srcRoot + '/styles/scss/style.scss')
        .pipe($.sourcemaps.init())
        .pipe($.plumber())
        .pipe($.sass({
            precision: 10
        }))
        .on('error', function(err){
            browserSync.notify(err.message, 4000);
        })
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(distRoot + '/styles'))
        .pipe(reload({stream: true}))
        .pipe($.size({title: 'styles'}));
});

// Clean Style Map
gulp.task('clean:map', () => del(distRoot + '/styles/style.css.map'));

// Compile and Automatically Prefix Stylesheets (production)
// TODO Test concat with other css files
gulp.task('styles:build', gulp.series('sass-lint', 'clean:map', () => {
    return gulp.src(srcRoot + '/styles/scss/style.scss')
        .pipe($.plumber())
        .pipe($.sass({
            precision: 10
        }))
        .on('error', function(err){
            browserSync.notify(err.message, 4000);
        })
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gulp.dest(distRoot + '/styles'))
        .pipe($.csso())
        .pipe($.header(banner, {pkg}))
        .pipe(gulp.dest(distRoot + '/styles'))
        .pipe(reload({stream: true, once: true}))
        .pipe($.size({title: 'styles'}));
}));

// Concatenate And Minify JavaScript
gulp.task('scripts:build', () => {
    return gulp.src(SOURCES)
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.uglify())
        .pipe($.concat('scripts.min.js'))
        .pipe($.header(banner, {pkg}))
        .pipe(gulp.dest(distRoot + '/scripts'))
        .pipe($.size({title: 'scripts'}));
});

let watch = () => {
    gulp.watch([srcRoot + '/scripts/src/script.js', 'gulpfile.babel.js'], gulp.series('lint'));
    gulp.watch(srcRoot + '/styles/scss/**/*.scss', gulp.series('styles:dev'));
    gulp.watch(srcRoot + '/images/*/**', gulp.series('images:min'));
};

gulp.task('serve', gulp.series('styles:dev', () => {
    connect.server({
        stdio: 'ignore'
    }, function (){
        browserSync({
            proxy: 'localhost:8000',
        });
    });

    watch();
}));

gulp.task('build', gulp.parallel('scripts:build', 'styles:build'));
