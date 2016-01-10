<?php

namespace Rfifteen\Toolbox;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use GuzzleHttp\Client;

class SafeBrowsing
{
    private $responseCode = 0;
    private $responseBody = '';

    private $url = '';
    private $appver;
    private $client;
    private $key;
    private $pver;

    public function __construct($url)
    {
        $this->url = $url;
        $this->appver = env('APP_VERSION', '0.0.1');
        $this->client = env('GOOGLE_API_APP', 'demo-app');
        $this->key = env('GOOGLE_API_KEY', '1234');
        $this->pver = env('GOOGLE_API_VERSION', '3.1');
        $this->verify = env('GUZZLE_SSL_VERIFY', true);
    }

    public function isSafeSite()
    {
        $url = 'https://sb-ssl.google.com/safebrowsing/api/lookup?client='.urlencode($this->client).'&key='.$this->key.'&appver='.$this->appver.'&pver='.$this->pver.'&url='.urlencode($this->url);

        $client = new Client();

        $res = $client->request('GET', $url, [
            'verify' => $this->verify
        ]);

        $this->responseCode = $res->getStatusCode();
        $this->responseBody = array_map('\Illuminate\Support\Str::title', explode(',', $res->getBody()));

        return ($this->responseCode == 204);
    }

    public function getErrorMessage()
    {
        $errors = [
            200 => $this->responseBody,
            400 => 'Bad Request—The HTTP request was not correctly formed.',
            401 => 'Not Authorized—The API key is not authorized.',
            503 => 'Service Unavailable—The server cannot handle the request. Besides the normal server failures, this can also indicate that the client has been “throttled” for sending too many requests.',
        ];

        return $errors[$this->responseCode];
    }

}
