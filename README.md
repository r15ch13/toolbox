# Toolbox

This little project was inspired by Paul Schou's [TRANSLATOR, BINARY xlate](http://home.paulschou.net/tools/xlate/).
I used xlate used often, but it lacked some features. So I created this project and added a few features, such as XML and JSON beautifier. Checkout out the [demo1](http://manly-malinda.gopagoda.com/)/[demo2](https://r15.ch/).

## Installation

Clone repository, install submodules.
```
> git clone https://github.com/r15ch13/toolbox.git
> cd toolbox
```
Install dependencies using [Composer](http://getcomposer.org/).
```
> php composer.phar install
```

Install dependencies using [Bower](http://bower.io/).
```
> npm install
> bower install
```

Now follow the [Lumen configuration](https://lumen.laravel.com/docs/5.2/installation#configuration) instructions.

Copy ```.env.example``` file to ```.env```

Generate application key:
```
> chmod -R 777 storage
> php artisan key:generate
```
Change application and database settings:
```
> nano .env
```
Migrate database:
```
> php artisan migrate
```

Done!

License
-------
[The MIT License (MIT)](http://r15ch13.mit-license.org/)