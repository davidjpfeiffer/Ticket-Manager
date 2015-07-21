'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    del = require('del');

gulp.task('concatScripts', function() {
    return gulp.src([
        './js/angular/angular.min.js',
        './js/angular/angular-route.min.js',
        './js/socket-io/client-socket-io.js',
        './app.module.js',
        './app.routes.js',
        './app.filters.js',
        './account/authentication.service.js',
        './account/loginForm.controller.js',
        './chat.service.js',
        './main.controller.js',
        './chat/**/*.js',
        './app/**/*.js'
    ])
        .pipe(maps.init())
        .pipe(concat('app.js'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minifyScripts', ['concatScripts'], function() {
    return gulp.src('dist/app.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('compileSass', function() {
    return gulp.src('./css/app.scss')
        .pipe(maps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(maps.write('./'))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
    gulp.watch('./css/**/*.scss', ['compileSass']);
    gulp.watch([
        './js/angular/angular.min.js',
        './js/angular/angular-route.min.js',
        './js/socket-io/client-socket-io.js',
        './app.module.js',
        './app.routes.js',
        './app.filters.js',
        './account/authentication.service.js',
        './account/loginForm.controller.js',
        './chat.service.js',
        './main.controller.js',
        './app/**/*.js'
    ], ['minifyScripts']);
});

gulp.task('clean', function(done) {
    del(['dist', 'css/app.min.js*, js/app*.js*'], done);
});

gulp.task('build', ['clean'], function() {
    gulp.start(['minifyScripts', 'compileSass']);
});

gulp.task('default', ['build']);