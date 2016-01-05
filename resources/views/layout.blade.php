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
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @if ( ! env('APP_DEBUG'))
            <link rel="stylesheet" href="{{ cache_buster('css/all.min.css') }}">
        @else
            <link rel="stylesheet" href="{{ url('packages/modernui/css/modern.css') }}">
            <link rel="stylesheet" href="{{ url('packages/modernui/css/modern-responsive.css') }}">
            <link rel="stylesheet" href="{{ url('packages/codemirror/lib/codemirror.css') }}">
            <link rel="stylesheet" href="{{ url('css/main.css') }}">
        @endif
    </head>
    <body class="metrouicss">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        <a href="https://github.com/r15ch13/toolbox" class="fork-me">
            <img src="{{ url('img/forkme_right_bottom_green_007200.png') }}" alt="Fork me on GitHub">
        </a>

        <div class="page">
            <div class="nav-bar">
                <div class="nav-bar-inner padding10">
                    <span class="pull-menu"></span>

                    <a href="{{ route('home') }}">
                        <span class="element brand">
                            @lang('main.title')
                        </span>
                    </a>

                    <span class="divider"></span>

                    <ul class="menu">
                        <li class="{{ route('home') == Request::url() ? 'active' : '' }}"><a href="{{ route('home') }}">@lang('main.menu.home')</a></li>
                        <li class="{{ route('about') == Request::url() ? 'active' : '' }}"><a href="{{ route('about') }}">@lang('main.menu.about')</a></li>
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

        @if ( ! env('APP_DEBUG'))
            <script src="{{ cache_buster('js/app.min.js') }}"></script>
        @else
            <script src="{{ url('packages/jquery-1.10.1.js') }}"></script>
            <script src="{{ url('packages/codemirror/lib/codemirror.js') }}"></script>
            <script src="{{ url('packages/codemirror/mode/xml/xml.js') }}"></script>
            <script src="{{ url('packages/codemirror/mode/javascript/javascript.js') }}"></script>
            <script src="{{ url('packages/codemirror/addon/fold/foldcode.js') }}"></script>
            <script src="{{ url('packages/codemirror/addon/fold/brace-fold.js') }}"></script>
            <script src="{{ url('packages/codemirror/addon/fold/indent-fold.js') }}"></script>
            <script src="{{ url('packages/codemirror/addon/fold/xml-fold.js') }}"></script>
            <script src="{{ url('packages/modernui/javascript/dropdown.js') }}"></script>
            <script src="{{ url('packages/modernui/javascript/input-control.js') }}"></script>
            <script src="{{ url('js/main.js') }}"></script>
        @endif
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
    </body>
</html>
