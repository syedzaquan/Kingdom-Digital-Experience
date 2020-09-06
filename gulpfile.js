var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    strip = require('gulp-strip-comments'),
    minify = require('gulp-minifier'),
    // Project Settings, Folder Naming
    Project = 'app',
    cssPath = `/css`,
    jsPath = `/js`,
    // Swap true false between isMVCProject and VersionParameters
    // Set isMVCProject to true only when project is created by MVC
    isMVCProject = false,
    // e.g VersionParameters is only true when project is a static html
    // else set to false because MVC have their own versioning
    VersionParameters = false;

var minSetting = {
    minify: false,
    minifyHTML: {
        collapseWhitespace: true,
        conservativeCollapse: true,
    },
    minifyJS: false,
    minifyCSS: false,
};

var minExtJs = {
    extname: ".min.js"
}
var minExtCss = {
    extname: ".min.css"
}

// Converting ES6 to Javascript using babel on save
gulp.task('babel', function () {
    return gulp.src('./scripts/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(strip())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(`./${jsPath}`))
        // .pipe(minify(minSetting))
        // .pipe(rename("main.min.js"))
        // .pipe(gulp.dest(`./${jsPath}`))
        .pipe(browserSync.stream());
});

// Getting sass on save
gulp.task('sass', function () {
    var plugins = [
        require("postcss-import")(),
        require("postcss-url")(),
        require("postcss-cssnext")(),
        require("postcss-browser-reporter")(),
        require("postcss-reporter")(),
    ]
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('experiences.css'))
        .pipe(postcss(plugins))
        .pipe(gulp.dest(`./${cssPath}`))
        // .pipe(minify(minSetting))
        // .pipe(concat('style.min.css'))
        // .pipe(gulp.dest(`./${cssPath}`))
        .pipe(browserSync.stream());
});

// Applying all fonts in Font folder
// PS* "You need to comment out Bootstrap Fonts if using Visual Studio".
gulp.task('FontAwesomeFonts', function () {
    return gulp.src([
            './node_modules/@fortawesome/fontawesome-free-webfonts/webfonts/*',
        ])
        .pipe(gulp.dest(`./${cssPath}/../webfonts`));
});

//  Copy Jquery to Scripts folder
gulp.task('JQuery', function () {
    return gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './node_modules/jquery/dist/jquery.min.js',
        ])
        .pipe(gulp.dest(`./${jsPath}`));
});

//  Copy Bootstrap JS to Scripts folder
gulp.task('BootstrapJS', function () {
    return gulp.src([
        './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
        ])
        .pipe(concat('bootstrap.js'))
        .pipe(gulp.dest(`./${jsPath}`));
});

// Applying Font Awesome in Content folder
gulp.task('FontAwesome', function () {
    return gulp.src([
            './node_modules/@fortawesome/fontawesome-free-webfonts/css/fontawesome.css',
            './node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
            './node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
            './node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
        ])
        .pipe(concat('fontawesome.css'))
        .pipe(gulp.dest(`./${cssPath}`))
        .pipe(minify(minSetting))
        .pipe(concat('fontawesome.min.css'))
        .pipe(gulp.dest(`./${cssPath}`));
});

// Copy Bootstrap CSS to Content folder
gulp.task('BootstrapCSS', function () {
    return gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/bootstrap/dist/css/bootstrap.css.map',
            // './node_modules/bootstrap/dist/css/bootstrap-grid.css',
            // './node_modules/bootstrap/dist/css/bootstrap-grid.css.map',
            // './node_modules/bootstrap/dist/css/bootstrap-reboot.css',
            // './node_modules/bootstrap/dist/css/bootstrap-reboot.css.map',
        ])
        // .pipe(concat('bootstrap.css'))
        .pipe(gulp.dest(`./${cssPath}`))
        // .pipe(minify(minSetting))
        // .pipe(concat('bootstrap.min.css'))
        .pipe(gulp.dest(`./${cssPath}`));
});

// Applying all Scripts in Scripts folder
gulp.task('ScriptLibrary', function () {
    return gulp.src([
            './node_modules/slick-carousel/slick/slick.js',
            './node_modules/jquery-match-height/jquery.matchHeight.js',
            './node_modules/ismobilejs/isMobile.js',
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(`./${jsPath}`))
        .pipe(minify(minSetting))
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest(`./${jsPath}`));
});

// Applying all CSS Vendor in css folder
// PS* For SlickJS we will be using it on our 'sass' @import to extend it.
gulp.task('CssLibrary', function () {
    return gulp.src([
            './node_modules/slick-carousel/slick/slick.css',
            './node_modules/slick-carousel/slick/slick-theme.css'
        ])
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(`./${cssPath}`))
        .pipe(minify(minSetting))
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest(`./${cssPath}`));
});

gulp.task('Slickfonts', function () {
    return gulp.src([
            './node_modules/bootstrap/dist/fonts/*',
            './node_modules/slick-carousel/slick/fonts/*'
        ])
        .pipe(gulp.dest(`./${cssPath}/fonts`));
});

// Copy all usable plugin images in image/media folder
gulp.task('CopyImages', function () {
    return gulp.src([
            './node_modules/slick-carousel/slick/ajax-loader.gif'
        ])
        .pipe(gulp.dest(`./${ImgPath}`));
});

gulp.task('Versioning', function () {
    return gulp.src(`./${Project}/**/*.html`)
        .pipe(replace(/v(=\d+)/g, `v=${new Date().getTime()}`))
        .pipe(gulp.dest(`./${Project}/`));
});

// Serve Gulp
// PS* "You need to comment out JQuery/BootstrapJS/BootstrapCSS if using Visual Studio environment".
gulp.task('default', [
    'sass',
    'babel',
    //'FontAwesomeFonts',
    //'FontAwesome',
    //'Slickfonts',
    //'ScriptLibrary',
    //'CopyImages',
    //'BootstrapJS',
    //'BootstrapCSS',
    // 'JQuery',
    //'CssLibrary'
], function () {

    // if (isMVCProject) {
    //     browserSync.init({
    //         proxy: `localhost:${MVCPort}`,
    //         notify: true,
    //         open: true, // set true to open once init
    //         logLevel: 'debug',
    //         port: Port,
    //     });
    // } else {
    //     browserSync.init({
    //         server: {
    //             baseDir: `./${Project}`,
    //         },
    //         notify: true,
    //         open: true, // set true to open once init
    //         logLevel: 'debug',
    //         port: Port,
    //     });
    // }

    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./scripts/**/*.js', ['babel']);

    gulp.watch([
        `./${cssPath}/*.css`,
        `./${jsPath}/*.js`,
        //(isMVCProject) ? `./${views}/**/*.cshtml` : `./${Project}/**/*.html`
    ]).on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', doing page reload!');
        browserSync.reload();
    });
});