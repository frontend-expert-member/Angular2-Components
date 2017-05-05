/*
 * This config is only used during development and build phase only
 * It will not be available on production
 *
 */

(function(global) {
    // ENV
    global.ENV = global.ENV || 'development';

    // map tells the System loader where to look for things
    var map = {
        'app': 'src/tmp/app',
        'test': 'src/tmp/test',
        'moment': 'node_modules/moment/moment.js',
        'moment-timezone': 'node_modules/moment-timezone/builds/moment-timezone-with-data-2010-2020.min.js',
        'ng2-bootstrap': 'node_modules/ng2-bootstrap',
        'ngx-bootstrap': 'node_modules/ngx-bootstrap',
        'angular2-busy': 'node_modules/angular2-busy/build/src',
        'angular2-dynamic-component': 'node_modules/angular2-dynamic-component',
        'ts-metadata-helper': 'node_modules/ts-metadata-helper',
        'core-js': 'node_modules/core-js',
        'ng2-responsive': 'node_modules/ng2-responsive',
        'ng2-responsive/bootstrap': 'node_modules/ng2-responsive/bootstrap',
        'ng2-responsive/browsers': 'node_modules/ng2-responsive/browsers',
        'ng2-responsive/config': 'node_modules/ng2-responsive/config',
        'ng2-responsive/custom-sizes': 'node_modules/ng2-responsive/custom-sizes',
        'ng2-responsive/devices': 'node_modules/ng2-responsive/devices',
        'ng2-responsive/pixelratio': 'node_modules/ng2-responsive/pixelratio',
        'ng2-responsive/responsive': 'node_modules/ng2-responsive/responsive',
        'ng2-responsive/responsive-window': 'node_modules/ng2-responsive/responsive-window',
        'ng2-responsive/useragent': 'node_modules/ng2-responsive/useragent',
        'ng2-responsive': 'node_modules/ng2-responsive'

    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {
            defaultExtension: 'js'
        },
        'test': {
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },

        'ngx-bootstrap': {
            format: 'cjs',
            main: 'bundles/ngx-bootstrap.umd.js',
            defaultExtension: 'js'
        },
        'ng2-bootstrap': {
            format: 'cjs',
            main: 'bundles/ng2-bootstrap.umd.js',
            defaultExtension: 'js'
        },
        'angular2-busy': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'ng2-responsive': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'ng2-responsive/bootstrap': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'ng2-responsive/browsers': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'ng2-responsive/config': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'ng2-responsive/custom-sizes': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'ng2-responsive/devices': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'ng2-responsive/pixelratio': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'ng2-responsive/responsive': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'ng2-responsive/responsive-window': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'ng2-responsive/useragent': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'ng2-responsive': {
            main: './index.js',
            defaultExtension: 'js'
        },
        'angular2-dynamic-component': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'ts-metadata-helper': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'core-js': {
            main: 'index.js',
            defaultExtension: 'js'
        }
    };

    // List npm packages here
    var npmPackages = [
        '@angular',
        'rxjs',
        'lodash'

    ];

    // Add package entries for packages that expose barrels using index.js
    var packageNames = [
        // App barrels
        'app/shared',

        // 3rd party barrels
        'lodash'
    ];

    // Add package entries for angular packages
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];

    npmPackages.forEach(function(pkgName) {
        map[pkgName] = 'node_modules/' + pkgName;
    });

    packageNames.forEach(function(pkgName) {
        packages[pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    });

    ngPackageNames.forEach(function(pkgName) {
        map['@angular/' + pkgName] = 'node_modules/@angular/' + pkgName +
            '/bundles/' + pkgName + '.umd.js';
        map['@angular/' + pkgName + '/testing'] = 'node_modules/@angular/' + pkgName +
            '/bundles/' + pkgName + '-testing.umd.js';
    });

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }

    System.config(config);

})(this);