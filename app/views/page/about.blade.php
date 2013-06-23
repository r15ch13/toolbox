@extends('layout')

@section('title')
    @lang('main.page.about.title')
@stop

@section('content')
    <div class="page secondary">
        <div class="page-header">
            <div class="page-header-content">
                <h1>@lang('main.page.about.title')<small></small></h1>
                <a href="{{ URL::route('home') }}" class="back-button big page-back"></a>
            </div>
        </div>
        <div class="page-region">
            <div class="page-region-content">
                @lang('main.page.about.content')
            </div>
        </div>
    </div>
@stop
