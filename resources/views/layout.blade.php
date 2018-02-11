<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>@lang('main.title')</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="stylesheet" href="{{ url('metro/css/metro.min.css') }}">
        <link rel="stylesheet" href="{{ url('metro/css/metro-responsive.min.css') }}">
        <link rel="stylesheet" href="{{ url('metro/css/metro-icons.min.css') }}">
        <link rel="stylesheet" href="{{ url('codemirror/css/codemirror.css') }}">
        <link rel="stylesheet" href="{{ url('css/main.css') }}">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Code+Pro">
    </head>
    <body class="container">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <span id="forkongithub"><a href="https://github.com/r15ch13/toolbox">Fork me on GitHub</a></span>

        <div class="app-bar">
            <a class="app-bar-element branding" href="{{ route('home') }}">@lang('main.title')</a>
            <span class="app-bar-divider"></span>
            <a class="app-bar-element {{ route('home') == \Illuminate\Support\Facades\Request::url() ? 'active' : '' }}" href="{{ route('home') }}">@lang('main.menu.home')</a>
            <a class="app-bar-element {{ route('about') == \Illuminate\Support\Facades\Request::url() ? 'active' : '' }}" href="{{ route('about') }}">@lang('main.menu.about')</a>
        </div>

        @yield('content')

        <div class="grid">
            <div class="row">
                <div class="cell bg-darkCyan fg-white padding10">
                    Styled with <a class="fg-white" href="http://metroui.org.ua"><span class="mif-windows"></span> Metro UI CSS</a>
                </div>
            </div>
        </div>

        <script src="{{ url('jquery/js/jquery.min.js') }}"></script>
        <script>
            $.fn.selectText = $.fn.select;
        </script>
        <script src="{{ url('codemirror/js/codemirror.js') }}"></script>
        <script src="{{ url('codemirror/js/xml.js') }}"></script>
        <script src="{{ url('codemirror/js/javascript.js') }}"></script>
        <script src="{{ url('codemirror/js/foldcode.js') }}"></script>
        <script src="{{ url('codemirror/js/brace-fold.js') }}"></script>
        <script src="{{ url('codemirror/js/indent-fold.js') }}"></script>
        <script src="{{ url('codemirror/js/xml-fold.js') }}"></script>
        <script src="{{ url('metro/js/metro.js') }}"></script>
        <script src="{{ url('js/main.js') }}"></script>
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
    </body>
</html>
