<?php

namespace Rfifteen\Toolbox;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use GuzzleHttp\Client as HttpClient;
use GuzzleHttp\Exception\ClientException;
class SafeBrowsing
{
    private $responseCode = 0;
    private $responseBody = '';

    private $url = '';
    private $appver;
    private $client;
    private $key;
    private $pver;
    private $matches = [];

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
        $safeBrowsingUrl = sprintf('https://safebrowsing.googleapis.com/v4/threatMatches:find?key=%s', $this->key);

        $safeBrowsingPayload = [
            'client' => [
                'clientId' => $this->client,
                'clientVersion' => $this->appver,
            ],
            'threatInfo' => [
                'threatTypes' => ['MALWARE', 'SOCIAL_ENGINEERING', 'UNWANTED_SOFTWARE', 'POTENTIALLY_HARMFUL_APPLICATION'],
                'platformTypes' => ['ANY_PLATFORM'],
                'threatEntryTypes' => ['URL'],
                'threatEntries' => [['url' => $this->url]]
            ]
        ];

        try {
            $response = (new HttpClient)->post($safeBrowsingUrl, [
                'json' => $safeBrowsingPayload,
                'verify' => $this->verify
            ]);
        } catch (ClientException $ex) {
            throw new \Exception(json_decode($ex->getResponse()->getBody())->error->message);
        }

        $this->responseCode = $response->getStatusCode();
        $body = json_decode($response->getBody());
        if(isset($body->matches)) {
            $this->matches = $body->matches;
        }
        return count($this->matches) === 0;
    }

    public function getMatches()
    {
        return $this->matches;
    }

    public function getMatchesFormatted()
    {
        $matchesFormatted = [];
        foreach($this->getMatches() as $match) {
            $matchesFormatted[] = \Illuminate\Support\Str::title($match->threatType);
        }
        return $matchesFormatted;
    }

}
