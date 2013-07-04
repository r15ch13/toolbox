<?php

class Referrer extends Eloquent {

    protected $guarded = array('clicks', 'secure_clicks');
    public $timestamps = true;

    public function shortUrl()
    {
        return $this->belongsTo('ShortUrl');
    }

    public function click()
    {
        $this->clicks += 1;
        $this->save();
        $this->touch();
        return $this;
    }

    public function secureClick()
    {
        $this->secure_clicks += 1;
        $this->save();
        $this->touch();
        return $this;
    }

}
