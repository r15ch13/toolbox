@extends('layout')

@section('content')

<div class="page">
    <div class="page-region">
        <div class="page-region-content">

            <div class="grid">
                <div class="row">
                    <div class="span12 bg-color-red padding10 url-shortener">
                        <p class="fg-color-white">
                            @lang('main.textarea.shorten', ['hostname' => Request::header('host', '')])
                        </p>

                        <form method="POST" action="{{ Request::root() }}" accept-charset="UTF-8" class="">
                            <div class="input-control text span9">
                                <input class="long-url" placeholder="@lang('main.placeholder.shorten')" autocomplete="off" name="long_url" type="text" value="{{ Input::old('long_url', '') }}">
                                <button class="btn-clear"></button>
                            </div>
                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                            <div id="g-recaptcha" class="g-recaptcha" data-sitekey="{{ env('RECAPTCHA_PUBLIC_KEY', '') }}"></div>
                            <button class="btn-shorten place-right" disabled="disabled">@lang('main.button.shorten')</button>
                        </form>
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
                    <form method="POST" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <h3>@lang('main.textarea.text')</h3>
                        <div class="input-control textarea">
                            <textarea  name="text" id="text" cols="30" rows="10" placeholder="@lang('main.placeholder.text')">{{ $text }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="place-right">@lang('main.button.encode')</button>
                    </form>
                </div>
                <div class="span6 border-color-yellow padding10">
                    <form method="POST" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <h3>@lang('main.textarea.base64')</h3>
                        <div class="input-control textarea">
                            <textarea name="base64" id="base64" cols="30" rows="10" placeholder="@lang('main.placeholder.base64')">{{ $base64 }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="place-right">@lang('main.button.decode')</button>
                    </form>
                </div>
            </div>

            <div class="row">
                <div class="span6 border-color-redLight padding10">
                    <form method="POST" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <h3>@lang('main.textarea.binary')</h3>
                        <div class="input-control textarea">
                            <textarea name="binary" id="binary" cols="30" rows="10" placeholder="@lang('main.placeholder.binary')">{{ $binary }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="place-right">@lang('main.button.decode')</button>
                    </form>
                </div>
                <div class="span6 border-color-purple padding10">
                    <form method="POST" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <h3>@lang('main.textarea.hex')</h3>
                        <div class="input-control textarea">
                            <textarea name="hex" id="hex" cols="30" rows="10" placeholder="@lang('main.placeholder.hex')">{{ $hex }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="place-right">@lang('main.button.decode')</button>
                    </form>
                </div>
            </div>

            <div class="row">
                <div class="span6 border-color-purple padding10">
                    <form method="POST" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <h3>@lang('main.textarea.char')</h3>
                        <div class="input-control textarea">
                            <textarea name="char" id="char" cols="30" rows="10" placeholder="@lang('main.placeholder.char')">{{ $char }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="place-right">@lang('main.button.decode')</button>
                    </form>
                </div>
                <div class="span6 border-color-orange padding10">
                    <form method="POST" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <h3>@lang('main.textarea.url')</h3>
                        <div class="input-control textarea">
                            <textarea name="url" id="url" cols="30" rows="10" placeholder="@lang('main.placeholder.url')">{{ $url }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="place-right">@lang('main.button.decode')</button>
                    </form>
                </div>
            </div>

            <div class="row">
                <div class="span6 border-color-orange padding10">
                    <form method="POST" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <h3>@lang('main.textarea.html')</h3>
                        <div class="input-control textarea">
                            <textarea name="html" id="html" cols="30" rows="10" placeholder="@lang('main.placeholder.html')">{{ $html }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="place-right">@lang('main.button.decode')</button>
                    </form>
                </div>
                <div class="span6 border-color-orange padding10">
                    <form method="POST" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <h3>@lang('main.textarea.url_html')</h3>
                        <div class="input-control textarea">
                            <textarea name="url_html" id="url_html" cols="30" rows="10" placeholder="@lang('main.placeholder.url_html')">{{ $url_html }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="place-right">@lang('main.button.decode')</button>
                    </form>
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
