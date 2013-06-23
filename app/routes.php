<?php
require_once "helper.php";
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

/**
 * Home
 */
Route::get('/', array('as' => 'home', 'uses' => 'HomeController@home'));

Route::get('test', function() {


    // print_r(Referrer::increaseClick());

    // print_r(URL::previous());
    // if($surl = ShortUrl::findShort('r15')) {
    //     print_r($surl->secureClick());
    // }


    // $bla = new ShortUrl(array(
    //     'short' => 'r15',
    //     'url' => 'http://r15ch13.de',
    // ));
    // $bla->save();

//     $comment = new Comment(array('message' => 'A new comment.'));

// $post = Post::find(1);

// $comment = $post->comments()->save($comment);
});

/**
 * Decode/Encode all the strings ヽ(ﾟ◇ﾟ )ﾉ
 */
Route::post('/', array('as' => 'translate', 'uses' => 'HomeController@translate'));


/**
 * Page group
 */
Route::group(array('prefix' => 'page'), function()
{

    /**
     * Redirect to home.
     */
    Route::get('/', function() {
        return Redirect::to('home');
    });


    /**
     * Redirect to home.
     */
    Route::get('short', function() {
        return Redirect::to('home');
    });


    /**
     * Show about page.
     */
    Route::get('about', array('as' => 'about', 'uses' => 'HomeController@about'));

    /**
     * Shorten URL
     */
    Route::get('shorten', function() {
        return Redirect::to('home');
    });
    Route::post('shorten', array('as' => 'shorten_ajax', 'uses' => 'HomeController@shorten'));
});


/**
 * Search short URL and show page with long URL if found.
 */
Route::get('s/{slug}', array('as' => 'lengthen_secure', 'uses' => 'HomeController@lengthenSecure'));


/**
 * Search short URL and redirect to the long URL if found.
 */
Route::get('{slug}', array('as' => 'lengthen', 'uses' => 'HomeController@lengthen'));


/**
 * 404 Error page
 */
App::missing(function($exception)
{
    return Response::view('page.404', array(), 404);
});

