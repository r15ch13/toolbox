@extends('layout')

@section('content')

<div class="page">
    <div class="page-region">
        <div class="page-region-content">

            <div class="grid">
                <div class="row">
                    <div class="span12 bg-color-red padding10 url-shortener">
                        <p class="fg-color-white">
                            @lang('main.textarea.shorten', array('hostname' => Request::header('host', '')))
                        </p>

                        {{ Form::open(array('class' => '')) }}
                            <div class="input-control text span9">
                                {{ Form::text('long_url', Input::old('long_url', ''), array(
                                        'class' => 'long-url',
                                        'placeholder' => Lang::get('main.placeholder.shorten'),
                                        'autocomplete' => 'off'
                                    ))
                                }}
                                <button class="btn-clear"></button>
                            </div>
                            <button class="btn-shorten place-right">@lang('main.button.shorten')</button>
                        {{ Form::close() }}
                    </div>
                </div><!-- .row -->
                <div class="row url-shorten-message hide">
                    <div class="span12">
                        <div class="notices">
                            <div class="bg-color-green">
                                <a href="#" class="close"></a>
                                <div class="notice-header fg-color-white"></div>
                                <div class="notice-text"></div>
                            </div>
                        </div>
                    </div>
                </div><!-- .row -->
            </div>

        </div><!-- .page-region-content -->
    </div><!-- .page-region -->
</div><!-- .page -->


<div class="page">

    <div class="grid">

        <div class="decoder">

            <div class="row">
                <div class="span6 border-color-green padding10">
                    {{ Form::open(array('route' => 'translate')) }}
                        <h3>@lang('main.textarea.text')</h3>
                        <div class="input-control textarea">
                            <textarea  name="text" id="text" cols="30" rows="10" placeholder="@lang('main.placeholder.text')">{{ $text }}</textarea>
                        </div>
                        <button type="submit" class="place-right">@lang('main.button.encode')</button>
                    {{ Form::close() }}
                </div>
                <div class="span6 border-color-yellow padding10">
                    {{ Form::open(array('route' => 'translate')) }}
                        <h3>@lang('main.textarea.base64')</h3>
                        <div class="input-control textarea">
                            <textarea name="base64" id="base64" cols="30" rows="10" placeholder="@lang('main.placeholder.base64')">{{ $base64 }}</textarea>
                        </div>
                        <button type="submit" class="place-right">@lang('main.button.decode')</button>
                    {{ Form::close() }}
                </div>
            </div>

            <div class="row">
                <div class="span6 border-color-redLight padding10">
                    {{ Form::open(array('route' => 'translate')) }}
                        <h3>@lang('main.textarea.binary')</h3>
                        <div class="input-control textarea">
                            <textarea name="binary" id="binary" cols="30" rows="10" placeholder="@lang('main.placeholder.binary')">{{ $binary }}</textarea>
                        </div>
                        <button type="submit" class="place-right">@lang('main.button.decode')</button>
                    {{ Form::close() }}
                </div>
                <div class="span6 border-color-purple padding10">
                    {{ Form::open(array('route' => 'translate')) }}
                        <h3>@lang('main.textarea.hex')</h3>
                        <div class="input-control textarea">
                            <textarea name="hex" id="hex" cols="30" rows="10" placeholder="@lang('main.placeholder.hex')">{{ $hex }}</textarea>
                        </div>
                        <button type="submit" class="place-right">@lang('main.button.decode')</button>
                    {{ Form::close() }}
                </div>
            </div>

            <div class="row">
                <div class="span6 border-color-purple padding10">
                    {{ Form::open(array('route' => 'translate')) }}
                        <h3>@lang('main.textarea.char')</h3>
                        <div class="input-control textarea">
                            <textarea name="char" id="char" cols="30" rows="10" placeholder="@lang('main.placeholder.char')">{{ $char }}</textarea>
                        </div>
                        <button type="submit" class="place-right">@lang('main.button.decode')</button>
                    {{ Form::close() }}
                </div>
                <div class="span6 border-color-orange padding10">
                    {{ Form::open(array('route' => 'translate')) }}
                        <h3>@lang('main.textarea.url')</h3>
                        <div class="input-control textarea">
                            <textarea name="url" id="url" cols="30" rows="10" placeholder="@lang('main.placeholder.url')">{{ $url }}</textarea>
                        </div>
                        <button type="submit" class="place-right">@lang('main.button.decode')</button>
                    {{ Form::close() }}
                </div>
            </div>

            <div class="row">
                <div class="span6 border-color-orange padding10">
                    {{ Form::open(array('route' => 'translate')) }}
                        <h3>@lang('main.textarea.html')</h3>
                        <div class="input-control textarea">
                            <textarea name="html" id="html" cols="30" rows="10" placeholder="@lang('main.placeholder.html')">{{ $html }}</textarea>
                        </div>
                        <button type="submit" class="place-right">@lang('main.button.decode')</button>
                    {{ Form::close() }}
                </div>
                <div class="span6 border-color-orange padding10">
                    {{ Form::open(array('route' => 'translate')) }}
                        <h3>@lang('main.textarea.url_html')</h3>
                        <div class="input-control textarea">
                            <textarea name="url_html" id="url_html" cols="30" rows="10" placeholder="@lang('main.placeholder.url_html')">{{ $url_html }}</textarea>
                        </div>
                        <button type="submit" class="place-right">@lang('main.button.decode')</button>
                    {{ Form::close() }}
                </div>
            </div>

        </div><!-- .decoder -->

        @if($xml)
            <div class="row">
                <div class="span12 border-color-greenLight padding10">
                    <h3>@lang('main.textarea.xml')</h3>
                    <textarea id="code-xml">{{ $xml }}</textarea>
                </div>
            </div>
        @endif

        @if($json)
            <div class="row">
                <div class="span12 border-color-greenLight padding10">
                    <h3>@lang('main.textarea.json')</h3>
                    <textarea id="code-json">{{ $json }}</textarea>
                </div>
            </div>
        @endif

        @if($checksum)
            <div class="row">
                <div class="span12 border-color-greenLight padding10">
                    <h3>@lang('main.textarea.checksum')</h3>
                    <pre class="linenums">{{ $checksum }}</pre>
                </div>
            </div>
        @endif

    </div><!-- .grid -->
</div><!-- .page -->
@stop
