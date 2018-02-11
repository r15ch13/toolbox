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
$router->get('/', [
    'as' => 'home',
    'uses' => 'HomeController@home',
]);

/**
 * Decode/Encode all the strings ヽ(ﾟ◇ﾟ )ﾉ
 */
$router->post('/', [
    'as' => 'translate',
    'uses' => 'HomeController@translate',
]);

/**
 * Page group
 */
$router->group(['prefix' => 'page'], function($router)
{

    /**
     * Redirect to home.
     */
    $router->get('/', function() {
        return redirect()->route('home');
    });


    /**
     * Redirect to home.
     */
    $router->get('short', function() {
        return redirect()->route('home');
    });


    /**
     * Show about page.
     */
    $router->get('about', [
        'as' => 'about',
        'uses' => 'HomeController@about',
    ]);

    /**
     * Shorten URL
     */
    $router->get('shorten', function() {
        return redirect()->route('home');
    });

    $router->post('shorten', [
        'as' => 'shorten_ajax',
        'uses' => 'HomeController@shorten',
    ]);
});


/**
 * Search short URL and show page with long URL if found.
 */
$router->get('s/{slug}', [
    'as' => 'lengthen_secure',
    'uses' => 'HomeController@lengthenSecure',
]);

/**
 * Search short URL and redirect to the long URL if found.
 */
$router->get('{slug}', [
    'as' => 'lengthen',
    'uses' => 'HomeController@lengthen',
]);
