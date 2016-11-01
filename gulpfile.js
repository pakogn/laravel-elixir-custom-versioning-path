const elixir = require('laravel-elixir');

elixir.config.notifications = false;
// elixir.config.production = false
// elixir.config.sourcemaps = true

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    mix
        .styles([
            'assets/css/app.css'
        ], 'public/assets/css/style.css', './public')
        .scripts([
            'assets/js/app.js'
        ], 'public/assets/js/application.js', './public')
        .version([
            'assets/css/style.css',
            'assets/js/application.js'
        ], 'public');
});
