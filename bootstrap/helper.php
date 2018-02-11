<?php

if (!function_exists('__')) {
    /**
     * Retrieve a language line.
     *
     * @param  string  $key
     * @param  array   $replacements
     * @param  string  $language
     * @return string
     */
    function __($key, $replace = [], $locale = null) {
        return \Illuminate\Support\Facades\Lang::get($key, $replace, $locale);
    }
}

if (!function_exists('binary_encode')) {
    /**
     * Encode string to pretty printed binary code.
     * Based on https://paulschou.com/tools/xlate/
     *
     * @param  string  $value
     * @return string
     */
    function binary_encode($value) {
        $val = strval(decbin(ord(substr($value, 0, 1))));

        $result = str_repeat('0', 8 - strlen($val)) . $val;

        for ($i = 1; $i < strlen($value); $i = $i + 1) {
            $val = strval(decbin(ord(substr($value, $i, 1))));

            $result .= ' ' . str_repeat('0', 8 - strlen($val)) . $val;
        }

        return $result;
    }
}

if (!function_exists('binary_decode')) {
    /**
     * Decode binary code to string.
     * Based on https://paulschou.com/tools/xlate/
     *
     * @param  string  $value
     * @return string
     */
    function binary_decode($value) {
        $binary = preg_replace('/[^01]/', '', $value);

        $result = '';

        for ($i = 0; $i < strlen($binary); $i = $i + 8) {
            $result .= chr(bindec(substr($binary, $i, 8)));
        }

        return $result;
    }
}

if (!function_exists('hex_encode')) {
    /**
     * Encode string to pretty printed hex code.
     * Based on https://paulschou.com/tools/xlate/
     *
     * @param  string  $value
     * @return string
     */
    function hex_encode($value) {
        $val = dechex(ord(substr($value, 0, 1)));

        $result = str_repeat('0', 2 - strlen($val)) . $val;

        for ($i = 1; $i < strlen($value); $i = $i + 1) {
            $val = dechex(ord(substr($value, $i, 1)));

            $result .= ' ' . str_repeat('0', 2 - strlen($val)) . $val;
        }

        return $result;
    }
}

if (!function_exists('hex_decode')) {
    /**
     * Decode hex code to string.
     * Based on https://paulschou.com/tools/xlate/
     *
     * @param  string  $value
     * @return string
     */
    function hex_decode($value) {
        $value = preg_replace('/[^0-9a-fA-F]/', '', $value);

        $result = '';

        for ($i = 0; $i < strlen($value); $i = $i + 2) {
            $result .= chr(hexdec(substr($value, $i, 2)));
        }

        return $result;
    }
}

if (!function_exists('char_encode')) {
    /**
     * Encode string to pretty printed char decimals.
     * Based on https://paulschou.com/tools/xlate/
     *
     * @param  string  $value
     * @return string
     */
    function char_encode($value) {
        $result = ord(substr($value, 0, 1));

        for ($i = 1; $i < strlen($value); $i = $i + 1) {
            $result .= ' ' . ord(substr($value, $i, 1));
        }

        return $result;
    }
}

if (!function_exists('char_decode')) {
    /**
     * Decode char decimals to string.
     * Based on https://paulschou.com/tools/xlate/
     *
     * @param  string  $value
     * @return string
     */
    function char_decode($value) {
        $value = preg_split('/\\D+/', trim($value));

        $result = '';

        foreach ($value as $key) {
            $result .= chr($key);
        }

        return $result;
    }
}

if (!function_exists('xml_beautifier')) {
    /**
     * Beautify a given XML string.
     *
     * @param  string  $value
     * @return string
     */
    function xml_beautifier($value) {
        $xml = @simplexml_load_string($value);

        if ($xml === false) {
            return '';
        }

        $dom = new DOMDocument('1.0');
        $dom->preserveWhiteSpace = false;
        $dom->formatOutput = true;
        $dom->loadXML($xml->asXML());

        return $dom->saveXML();
    }
}

if (!function_exists('json_beautifier')) {
    /**
     * Beautify a given JSON string.
     *
     * @param  string  $value
     * @return string
     */
    function json_beautifier($value) {
        $json = json_decode($value);

        if (is_null($json)) {
            return '';
        }

        $json = json_encode($json, JSON_PRETTY_PRINT);

        return $json;
    }
}

if (!function_exists('checksums')) {
    /**
     * Create an array with all avaliable hashs for the given string.
     *
     * @param  string  $value
     * @return array
     */
    function checksums($value) {
        $result = [];

        foreach (hash_algos() as $algo) {
            $result[strtolower($algo)] = hash($algo, $value);
        }

        return $result;
    }
}

if (!function_exists('integer_to_short_string')) {
    /**
     * Return random string based on an interger.
     * Based on https://github.com/briancray/PHP-URL-Shortener/blob/master/shorten.php#L56
     * and http://stackoverflow.com/questions/742013/how-to-code-a-url-shortener
     *
     * @param  integer  $integer
     * @return string
     */
    function integer_to_short_string($integer, $base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
        $out = '';
        $length = strlen($base);

        while ($integer > $length - 1) {
            $out = $base[(int) fmod($integer, $length)] . $out;

            $integer = floor($integer / $length);
        }

        return $base[(int) $integer] . $out;
    }
}

if (!function_exists('cache_buster')) {
    /**
     * Prepare public asset URL for filename-based cache busting.
     * More details https://github.com/h5bp/html5-boilerplate/blob/master/.htaccess
     *
     * @param  string  $file
     * @param  string  $url
     * @return string
     */
    function cache_buster($file) {
        $files = new \Illuminate\Filesystem\Filesystem;

        $path = rtrim(app()->basePath('public/'), '/') . DIRECTORY_SEPARATOR . $file;

        if ($files->exists($path)) {
            $filename = substr($file, 0, -strlen($files->extension($path)) - 1);

            $buster = $files->lastModified($path);

            $ext = $files->extension($path);

            return \Illuminate\Support\Facades\URL::to($filename . '.' . $buster . '.' . $ext);
        }

        throw new \Illuminate\Filesystem\FileNotFoundException("File does not exist at path {$path}");
    }
}

if (!function_exists('config_path')) {
    /**
     * Get the configuration path.
     *
     * @param  string $path
     * @return string
     */
    function config_path($path = '') {
        return app()->basePath() . '/config' . ($path ? '/' . $path : $path);
    }
}
