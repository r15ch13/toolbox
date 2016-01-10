@extends('layout')

@section('title')
    @lang('main.page.about.title')
@stop

@section('content')
    <div class="grid">
        <div class="row">
            <div class="panel">
                <div class="heading bg-mauve fg-grayLighter">
                    <span class="title">@lang('main.page.about.title')</span>
                </div>
                <div class="content padding10">
                    @lang('main.page.about.content')
                </div>
            </div>
        </div>
    </div>
@stop
