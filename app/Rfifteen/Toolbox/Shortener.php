<?php

namespace Rfifteen\Toolbox;

use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;
use GuzzleHttp\Client;
use Rfifteen\Toolbox\ShortUrl;

class Shortener
{
    private $longUrl = '';

    public function __construct()
    {
        $this->longUrl = Input::get('long_url');
    }

    private function validator()
    {
        $validator = Validator::make(
            Input::all(),
            [
                'long_url' => 'required|url',
                'g-recaptcha-response' => 'recaptcha',
            ]
        );

        return $validator;
    }

    private function errorResponse($message, $type = 'unkown')
    {
        return response()->json([
            'status' => 'error',
            'title' => __('main.error.'.$type.'.title'),
            'message' => __('main.error.'.$type.'.message', [
                'message' => $message, 'type' => $type
            ]),
        ]);
    }

    private function successResponse($url, $shortUrl, $secureUrl)
    {
        return response()->json([
            'status' => 'ok',
            'short_url' => $shortUrl,
            'short_secure_url' =>  $secureUrl,
            'title' => __('main.success.title'),
            'message' => __('main.success.message', [
                'url' => $url,
                'shortURL' => $shortUrl,
                'secureShortURL' =>  $secureUrl,
            ]),
        ]);
    }

    public function shorten()
    {
        $validator = $this->validator();
        if($validator->fails())
        {
            return $this->errorResponse(join('<br>', $validator->messages()->all()), 'validation');
        }

        $shortUrl =  ShortUrl::where('url', '=', $this->longUrl)->first();
        if($shortUrl)
        {
            return $this->successResponse($this->longUrl, $shortUrl->getShortUrl(), $shortUrl->getSecureShortUrl());
        }

        $safeBrowsing = new SafeBrowsing($this->longUrl);
        try {
            if(!$safeBrowsing->isSafeSite())
            {
                return $this->errorResponse(join(', ', $safeBrowsing->getMatchesFormatted()), 'safebrowsing');
            }
        } catch (\Exception $ex) {
            return $this->errorResponse($ex->getMessage(), 'safebrowsing_error');
        }

        $shortUrl = ShortUrl::createFromUrl($this->longUrl);
        if($shortUrl->save())
        {
            return $this->successResponse($this->longUrl, $shortUrl->getShortUrl(), $shortUrl->getSecureShortUrl());
        }

        return $this->errorResponse('Unknown error.');
    }

}
