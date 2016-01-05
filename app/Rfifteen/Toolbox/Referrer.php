<?php

namespace Rfifteen\Toolbox;

use Illuminate\Database\Eloquent\Model;

class Referrer extends Model
{

    protected $guarded = ['clicks', 'secure_clicks'];
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
