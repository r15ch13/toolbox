<?php

return [

    'title' => 'Toolbox',

    'menu' => [
        'home' => 'Home',
        'about' => 'About',
    ],

    'textarea' => [
        'text' => 'Text',
        'base64' => 'Base64',
        'binary' => 'Binary',
        'hex' => 'Hex',
        'char' => 'ASCII DEC / CHAR',
        'url' => 'URL Encoding',
        'html' => 'HTML Entities',
        'url_html' => 'URL Encoding & HTML Entities',
        'morse' => 'Morse Code',
        'xml' => 'XML',
        'json' => 'JSON',
        'checksum' => 'MESSAGE DIGEST / CHECK SUM',
        'shorten' => 'URL Shortener: :hostname',
    ],

    'button' => [
        'decode' => 'Decode',
        'encode' => 'Encode / Beautify',
        'shorten' => 'Shorten',
        'shorten_new' => 'New',
    ],

    'placeholder' => [
        'shorten' => 'Enter URL to shorten',
        'text' => 'Insert text to encode or beautify here',
        'base64' => 'Insert Base64 encoded text here',
        'binary' => 'Insert Binary encoded text here',
        'hex' => 'Insert Hex code here',
        'char' => 'Insert ASCII DEC or CHAR encoded text here',
        'url' => 'Insert URL encoded text here',
        'html' => 'Insert HTML with escaped entities here',
        'url_html' => 'Insert URL encoded text with HTML entities here',
        'morse' => '.. -. ... . .-. -  -- --- .-. ... .  -.-. --- -.. .  .... . .-. .',
    ],

    'success' => [
        'title' => 'Success!',
        'message' => '<div class="cell">
            <label>Short URL:</label>
            <div class="input-control text">
                <input class="short-url autoselect" type="text" value=":shortURL">
            </div>
        </div>
        <div class="cell">
            <label>Secure URL:</label>
            <div class="input-control text">
                <input class="secure-url autoselect" type="text" value=":secureShortURL">
            </div>
        </div>
        <div class="cell">Redirects to: <span class="redirect-url">:url</span></div>',
    ],

    'error' => [
        'validation' => [
            'title' => 'Validation Error!',
            'message' => ':message',
        ],
        'safebrowsing' => [
            'title' => 'Google Safe Browsing Error!',
            'message' => 'Site contains or is: :message',
        ],
        'unkown' => [
            'title' => 'Unkown Server Error!',
            'message' => ':message',
        ],
    ],

    'page' => [
        'about' => [
            'title' => 'About',
            'content' => '<p>This little project was inspired by Paul Schou\'s <a href="https://paulschou.com/tools/xlate/">TRANSLATOR, BINARY xlate</a>.</p>
                        <p>I used xlate often, but it lacked some features. So I created this project and added a few features, such as XML and JSON beautifier and a URL shortener.</p>',
            'proceed' => 'Proceed to this page',
            'cancel' => 'Cancel',
        ],
        'secure' => [
            'title' => 'Redirect',
            'content' => '<p>The URL <code>:shortURL</code> will redirect you to </p><p><code>:url</code></p>',
        ],
    ],

];
