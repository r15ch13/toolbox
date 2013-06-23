<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>@lang('main.title')</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="{{ cache_buster('css/all.min.css') }}">
    </head>
    <body class="metrouicss">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        <a href="https://github.com/r15ch13/toolbox" class="fork-me">
            <img src="{{ url('img/forkme_right_bottom_green_007200.png'); }}" alt="Fork me on GitHub">
        </a>

        <div class="page">
            <div class="nav-bar">
                <div class="nav-bar-inner padding10">
                    <span class="pull-menu"></span>

                    <a href="{{ URL::route('home') }}">
                        <span class="element brand">
                            @lang('main.title')
                        </span>
                    </a>

                    <span class="divider"></span>

                    <ul class="menu">
                        {{ Form::navitem('home', Lang::get('main.menu.home')) }}
                        {{ Form::navitem('about', Lang::get('main.menu.about')) }}
                    </ul>
                </div>
            </div><!-- .nav-bar -->
        </div><!-- .page -->

        @yield('content')

        <div class="page">
            <div class="nav-bar">
                <div class="nav-bar-inner padding10">
                    <span class="element">
                        Styled with <a class="fg-color-white" href="http://metroui.org.ua">Metro UI CSS</a>
                    </span>
                </div>
            </div>
        </div>

        <script>
            (function(window, document, undefined){
                window.base_url = '{{ Request::root() }}';
            })(window, document);
        </script>
        <script src="{{ cache_buster('js/app.min.js') }}"></script>
    </body>
</html>
