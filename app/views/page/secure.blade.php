@extends('layout')

@section('content')
    <div class="page secondary">
        <div class="page-header">
            <div class="page-header-content">
                <h1>@lang('main.page.secure.title')<small></small></h1>
                <a href="{{ URL::route('home') }}" class="back-button big page-back"></a>
            </div>
        </div>
        <div class="page-region">
            <div class="page-region-content">
                <p>
                    @lang('main.page.secure.content', array('url' => $url, 'shortURL' => $short_url))
                </p>
                <p>
                    <a href="{{ $url }}" class="button default">@lang('main.page.about.proceed')</a>
                    <a href="{{ URL::route('home') }}" class="button bg-color-red fg-color-white">@lang('main.page.about.cancel')</a>
                </p>
            </div>
        </div>
    </div>
@stop
