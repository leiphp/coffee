<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function(){
    Route::get('/user', function( Request $request ){
        return $request->user();
    });

    /*
     |-------------------------------------------------------------------------------
     | Get All Cafes
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/cafes
     | Controller:     API\CafesController@getCafes
     | Method:         GET
     | Description:    Gets all of the cafes in the application
    */
    Route::get('/cafes', 'API\CafesController@getCafes');

    /*
     |-------------------------------------------------------------------------------
     | Get An Individual Cafe
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/cafes/{id}
     | Controller:     API\CafesController@getCafe
     | Method:         GET
     | Description:    Gets an individual cafe
    */
    Route::get('/cafes/{id}', 'API\CafesController@getCafe');

    /*
     |-------------------------------------------------------------------------------
     | Adds a New Cafe
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/cafes
     | Controller:     API\CafesController@postNewCafe
     | Method:         POST
     | Description:    Adds a new cafe to the application
    */
    Route::post('/cafes', 'API\CafesController@postNewCafe');

    /*
     |-------------------------------------------------------------------------------
     | 获取所有冲泡方法
     |-------------------------------------------------------------------------------
     | 请求URL: /api/v1/brew-methods
     | 控制器:  API\BrewMethodsController@getBrewMethods
     | 请求方法: GET
     | API描述: 获取应用中的所有冲泡方法
    */
    Route::get('/brew-methods', 'API\BrewMethodsController@getBrewMethods');

    // 喜欢咖啡店
    Route::post('/cafes/{id}/like', 'API\CafesController@postLikeCafe');
    // 取消喜欢咖啡店
    Route::delete('/cafes/{id}/like', 'API\CafesController@deleteLikeCafe');

    /*
    |-------------------------------------------------------------------------------
    | 添加标签到指定咖啡店
    |-------------------------------------------------------------------------------
    | 请求URL:            /api/v1/cafes/{id}/tags
    | 控制器方法:     API\CafesController@postAddTags
    | 请求方式:         POST
    | 功能描述:    用户为某个咖啡店添加标签
    */
    Route::post('/cafes/{id}/tags', 'API\CafesController@postAddTags');

    /*
    |-------------------------------------------------------------------------------
    | 删除指定咖啡店上的指定标签
    |-------------------------------------------------------------------------------
    | 请求URL:            /api/v1/cafes/{id}/tags/{tagID}
    | 控制器方法:     API\CafesController@deleteCafeTag
    | 请求方式:         DELETE
    | 功能描述:    用户从某个咖啡店上删除标签
    */
    Route::delete('/cafes/{id}/tags/{tagID}', 'API\CafesController@deleteCafeTag');

    /*
    |-------------------------------------------------------------------------------
    | 搜索标签（自动提示/补全）
    |-------------------------------------------------------------------------------
    | 请求URL:            /api/v1/tags
    | 控制器:     API\TagsController@getTags
    | 请求方式:         GET
    | 功能描述:   根据输入词提供标签补全功能
    */
    Route::get('/tags', 'API\TagsController@getTags');
});