@extends('layout')

@section('content')
    <div class="grid">
        <div class="row">
            <div class="panel">
                <div class="heading bg-darkCrimson fg-grayLighter">
                    <span class="title">@lang('main.page.secure.title')</span>
                </div>
                <div class="content padding10">
                    <p>
                        @lang('main.page.secure.content', ['url' => $url, 'shortURL' => $short_url])
                    </p>
                    <p>
                        <a href="{{ $url }}" class="button bg-green fg-white">@lang('main.page.about.proceed')</a>
                        <a href="{{ route('home') }}" class="button bg-red fg-white">@lang('main.page.about.cancel')</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
@stop
