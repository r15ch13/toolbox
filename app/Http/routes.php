<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

/**
 * Home
 */
$app->get('/', [
    'as' => 'home',
    'uses' => 'HomeController@home',
]);

/**
 * Decode/Encode all the strings ヽ(ﾟ◇ﾟ )ﾉ
 */
$app->post('/', [
    'as' => 'translate',
    'uses' => 'HomeController@translate',
]);

/**
 * Page group
 */
$app->group(['prefix' => 'page', 'namespace' => 'App\Http\Controllers'], function($app)
{

    /**
     * Redirect to home.
     */
    $app->get('/', function() {
        return redirect()->route('home');
    });


    /**
     * Redirect to home.
     */
    $app->get('short', function() {
        return redirect()->route('home');
    });


    /**
     * Show about page.
     */
    $app->get('about', [
        'as' => 'about',
        'uses' => 'HomeController@about',
    ]);

    /**
     * Shorten URL
     */
    $app->get('shorten', function() {
        return redirect()->route('home');
    });

    $app->post('shorten', [
        'as' => 'shorten_ajax',
        'uses' => 'HomeController@shorten',
    ]);
});


/**
 * Search short URL and show page with long URL if found.
 */
$app->get('s/{slug}', [
    'as' => 'lengthen_secure',
    'uses' => 'HomeController@lengthenSecure',
]);

/**
 * Search short URL and redirect to the long URL if found.
 */
$app->get('{slug}', [
    'as' => 'lengthen',
    'uses' => 'HomeController@lengthen',
]);
