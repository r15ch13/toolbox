@extends('layout')

@section('content')

<div class="grid">

    <div class="row">
        <div class="cell">
            <div class="panel url-shortener">
                <div class="heading bg-grayDark fg-grayLighter">
                    <span class="icon mif-link"></span>
                    <span class="title">@lang('main.textarea.shorten', ['hostname' => Request::header('host', '')])</span>
                </div>
                <div class="content bg-steel padding10">
                    <form method="post" action="{{ Request::root() }}" accept-charset="utf-8">
                        <div class="input-control text full-size" data-role="input">
                            <input class="long-url autoselect" placeholder="@lang('main.placeholder.shorten')" autocomplete="off" name="long_url" type="text" value="{{ Input::old('long_url', '') }}">
                            <button class="button btn-shorten" disabled="disabled"><span class="icon mif-link"></span> @lang('main.button.shorten')</button>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <div id="recaptcha-shorten" data-sitekey="{{ env('RECAPTCHA_PUBLIC_KEY', '') }}"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="url-shorten-message hide">
        <div class="row">
            <div class="cell">
                <div class="panel">
                    <div class="heading bg-green fg-grayLighter">
                        <span class="icon mif-checkmark fg-grayLighter"></span>
                        <span class="title"></span>
                    </div>
                    <div class="content bg-grayLight fg-grayLighter padding10"></div>
                </div>
            </div>
        </div>
    </div>

</div>


<div class="grid">

    <div class="row cells2">
        <div class="cell decoder">
            <div class="panel">
                <div class="heading bg-lime fg-gray">
                    <span class="icon mif-embed2 fg-grayLighter"></span>
                    <span class="title">@lang('main.textarea.text')</span>
                </div>
                <div class="content padding10">
                    <form method="post" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <div class="input-control textarea">
                            <textarea name="text" id="text" cols="30" rows="10" placeholder="@lang('main.placeholder.text')">{!! $text !!}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="button small-button place-right">@lang('main.button.encode')</button>
                    </form>
                </div>
            </div>
        </div>

        <div class="cell decoder">
            <div class="panel">
                <div class="heading bg-yellow fg-gray">
                    <span class="icon mif-embed2 fg-grayLighter"></span>
                    <span class="title">@lang('main.textarea.base64')</span>
                </div>
                <div class="content padding10">
                    <form method="post" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <div class="input-control textarea">
                            <textarea name="base64" id="base64" cols="30" rows="10" placeholder="@lang('main.placeholder.base64')">{{ $base64 }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="button small-button place-right">@lang('main.button.decode')</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="row cells2">
        <div class="cell decoder">
            <div class="panel">
                <div class="heading bg-blue fg-grayLighter">
                    <span class="icon mif-file-binary fg-grayLighter"></span>
                    <span class="title">@lang('main.textarea.binary')</span>
                </div>
                <div class="content padding10">
                    <form method="post" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <div class="input-control textarea">
                            <textarea name="binary" id="binary" cols="30" rows="10" placeholder="@lang('main.placeholder.binary')">{{ $binary }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="button small-button place-right">@lang('main.button.decode')</button>
                    </form>
                </div>
            </div>
        </div>

        <div class="cell decoder">
            <div class="panel">
                <div class="heading bg-indigo fg-grayLighter">
                    <span class="icon mif-file-text fg-grayLighter"></span>
                    <span class="title">@lang('main.textarea.hex')</span>
                </div>
                <div class="content padding10">
                    <form method="post" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <div class="input-control textarea">
                            <textarea name="hex" id="hex" cols="30" rows="10" placeholder="@lang('main.placeholder.hex')">{{ $hex }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="button small-button place-right">@lang('main.button.decode')</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="row cells2">
        <div class="cell decoder">
            <div class="panel">
                <div class="heading bg-indigo fg-grayLighter">
                    <span class="icon mif-embed2 fg-grayLighter"></span>
                    <span class="title">@lang('main.textarea.char')</span>
                </div>
                <div class="content padding10">
                    <form method="post" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <div class="input-control textarea">
                            <textarea name="char" id="char" cols="30" rows="10" placeholder="@lang('main.placeholder.char')">{{ $char }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="button small-button place-right">@lang('main.button.decode')</button>
                    </form>
                </div>
            </div>
        </div>

        <div class="cell decoder">
            <div class="panel">
                <div class="heading bg-emerald fg-grayLighter">
                    <span class="icon mif-unlink fg-grayLighter"></span>
                    <span class="title">@lang('main.textarea.url')</span>
                </div>
                <div class="content padding10">
                    <form method="post" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <div class="input-control textarea">
                            <textarea name="url" id="url" cols="30" rows="10" placeholder="@lang('main.placeholder.url')">{{ $url }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="button small-button place-right">@lang('main.button.decode')</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="row cells2">
        <div class="cell decoder">
            <div class="panel">
                <div class="heading bg-orange fg-dark">
                    <span class="icon mif-html5 fg-grayLighter"></span>
                    <span class="title">@lang('main.textarea.html')</span>
                </div>
                <div class="content padding10">
                    <form method="post" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <div class="input-control textarea">
                            <textarea name="html" id="html" cols="30" rows="10" placeholder="@lang('main.placeholder.html')">{!! $html !!}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="button small-button place-right">@lang('main.button.decode')</button>
                    </form>
                </div>
            </div>
        </div>

        <div class="cell decoder">
            <div class="panel">
                <div class="heading bg-emerald fg-grayLighter">
                    <span class="icon mif-unlink fg-grayLighter"></span>
                    <span class="title">@lang('main.textarea.url_html')</span>
                </div>
                <div class="content padding10">
                    <form method="post" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <div class="input-control textarea">
                            <textarea name="url_html" id="url_html" cols="30" rows="10" placeholder="@lang('main.placeholder.url_html')">{{ $url_html }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="button small-button place-right">@lang('main.button.decode')</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="row cells2">
        <div class="cell decoder">
            <div class="panel">
                <div class="heading bg-violet fg-grayLighter">
                    <span class="icon mif-unlink fg-grayLighter"></span>
                    <span class="title">@lang('main.textarea.morse')</span>
                </div>
                <div class="content padding10">
                    <form method="post" action="{{ route('translate') }}" accept-charset="UTF-8" class="">
                        <div class="input-control textarea">
                            <textarea name="morse" id="morse" cols="30" rows="10" placeholder="@lang('main.placeholder.morse')">{{ $morse }}</textarea>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button type="submit" class="button small-button place-right">@lang('main.button.decode')</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    @if($xml)
        <div class="row">
            <div class="cell code">
                <div class="panel">
                    <div class="heading bg-lightGreen fg-dark">
                        <span class="icon mif-file-code fg-grayLighter"></span>
                        <span class="title">@lang('main.textarea.xml')</span>
                    </div>
                    <div class="content padding10">
                        <textarea id="code-xml">{{ $xml }}</textarea>
                    </div>
                </div>
            </div>
        </div>
    @endif

    @if($json)
        <div class="row">
            <div class="cell code">
                <div class="panel">
                    <div class="heading bg-lightGreen fg-dark">
                        <span class="icon mif-file-code fg-grayLighter"></span>
                        <span class="title">@lang('main.textarea.json')</span>
                    </div>
                    <div class="content padding10">
                        <textarea id="code-json">{{ $json }}</textarea>
                    </div>
                </div>
            </div>
        </div>
    @endif

    @if($checksum)
        <div class="row">
            <div class="cell checksums">
                <div class="panel">
                    <div class="heading bg-crimson fg-grayLighter">
                        <span class="icon mif-lock fg-grayLighter"></span>
                        <span class="title">@lang('main.textarea.checksum')</span>
                    </div>
                    <div class="content padding10">
                        <textarea id="code-txt">{{ $checksum }}</textarea>
                    </div>
                </div>
            </div>
        </div>
    @endif

</div><!-- .grid -->
@stop
