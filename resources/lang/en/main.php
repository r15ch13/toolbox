<?php

return array(

    'title' => 'Toolbox',

    'menu' => array(
        'home' => 'Home',
        'about' => 'About',
    ),

    'textarea' => array(
        'text' => 'Text',
        'base64' => 'Base64',
        'binary' => 'Binary',
        'hex' => 'Hex',
        'char' => 'ASCII DEC / CHAR',
        'url' => 'URL Encoding',
        'html' => 'HTML Entities',
        'url_html' => 'URL Encoding & HTML Entities',
        'xml' => 'XML',
        'json' => 'JSON',
        'checksum' => 'MESSAGE DIGEST / CHECK SUM',
        'shorten' => 'URL Shortener: :hostname',
    ),

    'button' => array(
        'decode' => 'Decode',
        'encode' => 'Encode / Beautify',
        'shorten' => 'Shorten',
        'shorten_new' => 'New',
    ),

    'placeholder' => array(
        'shorten' => 'Enter URL to shorten',
        'text' => 'Insert text to encode or beautify here',
        'base64' => 'Insert Base64 encoded text here',
        'binary' => 'Insert Binary encoded text here',
        'hex' => 'Insert Hex code here',
        'char' => 'Insert ASCII DEC or CHAR encoded text here',
        'url' => 'Insert URL encoded text here',
        'html' => 'Insert HTML with escaped entities here',
        'url_html' => 'Insert URL encoded text with HTML entities here',
    ),

    'short_url_message' => 'Short URL: <i class="short-url">:shortURL</i><br>
        Secure URL: <i class="short-url">:secureShortURL</i><br>
        Redirects to: <a href=":url" class="fg-color-white" target="_blank">:url</a>',

    'page' => array(
        'about' => array(
            'title' => 'About',
            'content' => '<p>This little project was inspired by Paul Schou\'s <a href="https://paulschou.com/tools/xlate/">TRANSLATOR, BINARY xlate</a>.</p>
                        <p>I used xlate used often, but it lacked some features. So I created this project and added a few features, such as XML and JSON beautifier.</p>',
            'proceed' => 'Proceed to this page',
            'cancel' => 'Cancel',
        ),
        'secure' => array(
            'title' => 'Redirect',
            'content' => '<p>The URL <code>:shortURL</code> will redirect you to </p><p><code>:url</code>.</p>',
        ),
    ),

);
