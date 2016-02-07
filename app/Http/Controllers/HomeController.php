<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use Rfifteen\Toolbox\ShortUrl;
use Rfifteen\Toolbox\Shortener;
use Morse\Text as MorseCode;

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
			'morse' => '',
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
			$text = base64_decode(chunk_split(Input::get('base64')));

		if(Input::has('char'))
			$text = char_decode(Input::get('char'));

		if(Input::has('url'))
			$text = urldecode(Input::get('url'));

		if(Input::has('html'))
			$text = html_entity_decode(Input::get('html'));

		if(Input::has('url_html'))
			$text = urldecode(html_entity_decode(Input::get('url_html')));

		if(Input::has('morse'))
			$text = (new MorseCode())->fromMorse(strtr(Input::get('morse'), [
                '·' => '.', // &middot;
                '⋅' => '.', // &sdot;
                '−' => '-', // &minus;
                '–' => '-', // &ndash;
            ]));

		// create checksum output
		$checksum_output = '';
        $checksum_output .= sprintf('%-12s%s', 'CRYPT:', crypt($text, '')).PHP_EOL;
        $checksum_output .= sprintf('%-12s%s', 'BCRYPT:', password_hash($text, PASSWORD_BCRYPT)).PHP_EOL;
        $checksum_output .= PHP_EOL;

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
			'html' => str_replace('&', '&amp;', htmlentities($text)),
			'url_html' => htmlentities(urlencode($text)),
			'xml' => xml_beautifier($text),
			'json' => json_beautifier($text),
			'morse' => (new MorseCode())->toMorse($text),
			'checksum' => trim($checksum_output),
			'short_url' => '',
        ];

		return view('page.home', $data);
	}

	public function about()
	{
		return view('page.about');
	}

    public function checkSafeBrowsing($url)
    {
        $appver = env('APP_VERSION', '0.0.1');
        $client = env('GOOGLE_API_APP', 'demo-app');
        $key = env('GOOGLE_API_KEY', '1234');
        $pver = env('GOOGLE_API_VERSION', '3.1');
        $url = 'https://sb-ssl.google.com/safebrowsing/api/lookup?client='.$client.'&key='.$key.'&appver='.$appver.'&pver='.$pver.'&url='.urlencode($url);
        //return $url;

        $client = new Client();

        $res = $client->request('GET', $url, [
            'verify' => env('GUZZLE_SSL_VERIFY', true)
        ]);

        return [
            'statusCode' => $res->getStatusCode(),
            'body' => (string)$res->getBody(),
        ];
    }

	public function shorten()
	{
        $shortener = new Shortener();
        return $shortener->shorten();
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