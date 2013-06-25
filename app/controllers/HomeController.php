<?php

class HomeController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|   Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function home()
	{
		$data = array(
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
		);

		return View::make('page.home', $data);
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

		$data = array(
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
		);

		return View::make('page.home', $data);
	}

	public function about()
	{
		return View::make('page.about');
	}

	public function shorten()
	{
		$url = Input::get('long_url');

		do
		{
			$slug = integer_to_short_string(ShortUrl::raiseLastId());
		}
		while(ShortUrl::find($slug));

		$new_url = URL::route('lengthen', array($slug));
		$new_secure_url = URL::route('lengthen_secure', array($slug));

		$validator = Validator::make(
			Input::all(),
			array('long_url' => 'required|url')
		);

		if ($validator->fails())
		{
			return Response::json(array(
				'status' => 'error',
				'message' => $validator->messages()->first('url'),
			));
		}

		if ( ! $short_url = ShortUrl::where('url', '=', $url)->first())
		{
			$short_url = new ShortUrl(array(
				'short' => $slug,
				'url' => $url,
				'ip' => Request::getClientIp(),
			));

			if($short_url->save())
			{
				return Response::json(array(
					'status' => 'ok',
					'short_url' => $new_url,
					'short_secure_url' => $new_secure_url,
					'message' => __('main.short_url_message', array(
						'url' => $url,
						'shortURL' => $new_url,
						'secureShortURL' => $new_secure_url,
					)),
				));
			}
		}
		else
		{
			return Response::json(array(
				'status' => 'ok',
				'short_url' => $short_url->getShortUrl(),
				'short_secure_url' => $short_url->getSecureShortUrl(),
				'message' => __('main.short_url_message', array(
					'url' => $url,
					'shortURL' => $short_url->getShortUrl(),
					'secureShortURL' => $short_url->getSecureShortUrl(),
				)),
			));
		}
	}

	public function lengthenSecure($short)
	{
		if($short_url = ShortUrl::findShort($short))
		{
			$short_url->secureClick();

			return View::make('page.secure', array(
				'url' => $short_url->url,
				'short_url' => $short_url->getShortUrl(),
			));
		}
		return Redirect::route('home');
	}

	public function lengthen($short)
	{
		if($short_url = ShortUrl::findShort($short))
		{
			return Redirect::to($short_url->click()->url);
		}
		return Redirect::route('home');
	}

}
