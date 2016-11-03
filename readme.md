# Laravel Elixir Custom Versioning Path

This is an example on how to get a custom Build Path or Versioning Path with laravel elixir.

## Setup

We took advantage of the assets files that are out of the box, public/css/app.css and public/js/app.js. Think of them as our sources files.

We put these files in the public/assets/ folder which is a common and recommended way to organize our assets in the public folder.

Then the tasks were defined in the [gulpfile.js](https://github.com/pakogn/laravel-elixir-custom-versioning-path/blob/master/gulpfile.js#L20-L32):

```javascript
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
```

```
Notice that we specified the public directory in the version method as the second parameter.
```

Now we have to reference our versioned resources. Again, We took advantage of the [welcome.blade.php](https://github.com/pakogn/laravel-elixir-custom-versioning-path/blob/master/resources/views/welcome.blade.php) view.

First, we added the css versioned [file](https://github.com/pakogn/laravel-elixir-custom-versioning-path/blob/master/resources/views/welcome.blade.php#L10).
```html
<link href="{{ asset(elixir('assets/css/style.css', '')) }}" rel="stylesheet" type="text/css">
```

```
Notice that we have sent an empty string as the second parameter so our asset file will be found correctly
```

I like to wrap the elixir in a an asset method to have a well formed URL. It's about tastes!

Next, we added the js versioned [file](https://github.com/pakogn/laravel-elixir-custom-versioning-path/blob/master/resources/views/welcome.blade.php#L99) too!

```html
<script type="text/javascript" src="{{ asset(elixir('assets/js/application.js', '')) }}"></script>
```

Finally and Optionally, to use the Vue suggestion we put the example component in the [welcome view](https://github.com/pakogn/laravel-elixir-custom-versioning-path/blob/master/resources/views/welcome.blade.php#L95).

```html
<example></example>
```

Now it's time to check our setup!

run:
  1. composer install
  2. npm install
  3. gulp
  4. php artisan serve
  5. go to [http://localhost:8000](http://localhost:8000)

```
Note: It's recommended to use the latest version of Node and NPM.
```

I find this workaround useful when you have a template or some assets you don't want to break. Also to maintain your folder structure without dealing with the common build directory created when versioning our assets.
