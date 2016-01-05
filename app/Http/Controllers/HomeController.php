<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Rfifteen\Toolbox\ShortUrl;

class HomeController extends Controller
{

	public function home()
	{
		$data = [
			'text' => '',
			'base64' => '',
			'binary' => '',
			'hex' => '',
			'char' => '',
			'url' => '',
			'html' => '',
			'url_html' => '',
			'xml' => '',
			'json' => '',
			'checksum' => '',
			'short_url' => Session::get('short_url', ''),
        ];

		return view('page.home', $data);
	}

	public function translate()
	{
		$text = Input::get('text', '');

		// decode stuff
		if(Input::has('binary'))
			$text = binary_decode(Input::get('binary'));

		if(Input::has('hex'))
			$text = hex_decode(Input::get('hex'));

		if(Input::has('base64'))
			$text = base64_decode(Input::get('base64'));

		if(Input::has('char'))
			$text = char_decode(Input::get('char'));

		if(Input::has('url'))
			$text = urldecode(Input::get('url'));

		if(Input::has('html'))
			$text = html_entity_decode(Input::get('html'));

		if(Input::has('url_html'))
			$text = urldecode(html_entity_decode(Input::get('url_html')));

		// create checksum output
		$checksum_output = '';
		$checksums = checksums($text);

		foreach($checksums as $key => $value)
		{
			$checksum_output .= sprintf('%-12s%s', strtoupper($key.':'), $value).PHP_EOL;
		}

		$data = [
			'text' => $text,
			'binary' => binary_encode($text),
			'hex' => hex_encode($text),
			'base64' => base64_encode($text),
			'char' => char_encode($text),
			'url' => urlencode($text),
			'html' => htmlentities($text),
			'url_html' => htmlentities(urlencode($text)),
			'xml' => xml_beautifier($text),
			'json' => json_beautifier($text),
			'checksum' => $checksum_output,
			'short_url' => '',
        ];

		return view('page.home', $data);
	}

	public function about()
	{
		return view('page.about');
	}

	public function shorten()
	{
		$url = Input::get('long_url');

		do
		{
			$slug = integer_to_short_string(ShortUrl::raiseLastId());
		}
		while(ShortUrl::find($slug));

		$new_url = route('lengthen', ['slug' => $slug]);
		$new_secure_url = route('lengthen_secure', ['slug' => $slug]);

		$validator = Validator::make(
			Input::all(),
			[
                'long_url' => 'required|url',
                'g-recaptcha-response' => 'required|recaptcha',
            ]
		);

		if ($validator->fails())
		{
			return response()->json([
				'status' => 'error',
				'message' => $validator->messages()->first('url'),
            ]);
		}

		if ( ! $short_url = ShortUrl::where('url', '=', $url)->first())
		{
			$short_url = new ShortUrl([
				'short' => $slug,
				'url' => $url,
				'ip' => Request::getClientIp(),
            ]);

			if($short_url->save())
			{
				return response()->json([
					'status' => 'ok',
					'short_url' => $new_url,
					'short_secure_url' => $new_secure_url,
					'message' => __('main.short_url_message', [
						'url' => $url,
						'shortURL' => $new_url,
						'secureShortURL' => $new_secure_url,
                    ]),
				]);
			}
		}
		else
		{
			return response()->json([
				'status' => 'ok',
				'short_url' => $short_url->getShortUrl(),
				'short_secure_url' => $short_url->getSecureShortUrl(),
				'message' => __('main.short_url_message', [
					'url' => $url,
					'shortURL' => $short_url->getShortUrl(),
					'secureShortURL' => $short_url->getSecureShortUrl(),
                ]),
            ]);
		}
	}

	public function lengthenSecure($short)
	{
		if($short_url = ShortUrl::findShort($short))
		{
			$short_url->secureClick();

			return view('page.secure', [
				'url' => $short_url->url,
				'short_url' => $short_url->getShortUrl(),
            ]);
		}
		return redirect()->route('home');
	}

	public function lengthen($short)
	{
		if($short_url = ShortUrl::findShort($short))
		{
			return redirect()->to($short_url->click()->url);
		}
		return redirect()->route('home');
	}

}