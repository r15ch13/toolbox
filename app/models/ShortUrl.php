<?php

class ShortUrl extends Eloquent {

    protected $guarded = array('clicks', 'secure_clicks');
    public $timestamps = true;

    public function referrers()
    {
        return $this->hasMany('Referrer');
    }

    public function currentReferrer()
    {
        $referrer_url = URL::previous();

        if(empty($referrer_url) || $referrer_url == Request::root())
        {
            return;
        }

        $referrer = Referrer::where('url', '=', $referrer_url)
            ->where('short_url_id', '=', $this->id)
            ->first();

        if( ! $referrer)
        {
            $referrer = new Referrer(array(
                'url' => $referrer_url,
                'short_url_id' => $this->id,
            ));
        }
        return $referrer;
    }

    public static function getlastId()
    {
        return Cache::get('last_id', 0);
    }

    public static function setlastId($value)
    {
        return Cache::forever('last_id', (int)$value);
    }

    public static function raiseLastId()
    {
        static::setlastId(static::getlastId() + 1);
        return static::getlastId();
    }

    public function getShortUrl($route = 'lengthen')
    {
        return URL::route($route, array($this->short));
    }

    public function getSecureShortUrl($route = 'lengthen_secure')
    {
        return URL::route($route, array($this->short));
    }

    public function click()
    {
        if($referrer = $this->currentReferrer())
        {
            $referrer->click();
        }

        $this->clicks += 1;
        $this->save();
        return $this;
    }

    public function secureClick()
    {
        if($referrer = $this->currentReferrer())
        {
            $referrer->secureClick();
        }

        $this->secure_clicks += 1;
        $this->save();
        return $this;
    }

    public static function findShort($short) {
        return static::where('short', '=', $short)->first();
    }

}
