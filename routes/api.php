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

// 公有路由，无需登录即可访问
Route::group(['prefix' => 'v1'], function(){
    Route::get('/user', 'API\UsersController@getUser');
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
     | 获取所有冲泡方法
     |-------------------------------------------------------------------------------
     | 请求URL: /api/v1/brew-methods
     | 控制器:  API\BrewMethodsController@getBrewMethods
     | 请求方法: GET
     | API描述: 获取应用中的所有冲泡方法
    */
    Route::get('/brew-methods', 'API\BrewMethodsController@getBrewMethods');

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

    /*
    |-------------------------------------------------------------------------------
    | 获取所有城市
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/cities
    | Controller:     API\CitiesController@getCities
    | Method:         GET
    | Description:    Get all cities
    */
    Route::get('/cities', 'API\CitiesController@getCities');

    /*
    |-------------------------------------------------------------------------------
    | 获取指定城市
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/cities/{id}
    | Controller:     API\CitiesController@getCity
    | Method:         GET
    | Description:    Gets an individual city
    */
    Route::get('/cities/{id}', 'API\CitiesController@getCity');
    /*
    |-------------------------------------------------------------------------------
    | Handles a Company Search
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/companies/search
    | Controller:     API\CompaniesController@getCompanySearch
    | Method:         GET
    | Description:    Handles a search for a company.
    */
    Route::get('/companies/search', 'API\CompaniesController@getCompanySearch');

});

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

// 私有路由，需要登录才能访问
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function(){
//    Route::get('/user', function( Request $request ){
//        return $request->user();
//    });
    /*
    |-------------------------------------------------------------------------------
    | 更新用户个人信息
    |-------------------------------------------------------------------------------
    | 请求URL:     /api/v1/user
    | 控制器方法:   API\UsersController@putUpdateUser
    | 请求方式:     PUT
    | 功能描述:     更新认证用户的个人信息
    */
    Route::put('/user', 'API\UsersController@putUpdateUser');
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
    | 获取待编辑咖啡店数据
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/cafes/{slug}/edit
    | Controller:     API\CafesController@getCafeEditData
    | Method:         GET
    | Description:    获取待编辑咖啡店数据
    */
    Route::get('/cafes/{id}/edit', 'API\CafesController@getCafeEditData');

    /*
    |-------------------------------------------------------------------------------
    | 执行更新咖啡店请求
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/cafes/{slug}
    | Controller:     API\CafesController@putEditCafe
    | Method:         PUT
    | Description:    执行更新咖啡店请求
    */
    Route::put('/cafes/{id}', 'API\CafesController@putEditCafe');

    /*
    |-------------------------------------------------------------------------------
    | 删除指定咖啡店
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/cafes/{slug}
    | Controller:     API\CafesController@deleteCafe
    | Method:         DELETE
    | Description:    删除指定咖啡店
    */
    Route::delete('/cafes/{id}', 'API\CafesController@deleteCafe');


});

// 管理后台路由
Route::group(['prefix' => 'v1/admin', 'middleware' => ['auth:api', 'owner']], function () {
    /*
    |-------------------------------------------------------------------------------
    | Get all actions
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/actions
    | Controller:     API\Admin\ActionsController@getActions
    | Method:         GET
    | Description:    Get all actions
     */
    Route::get('/actions', 'API\Admin\ActionsController@getActions');

    /*
    |-------------------------------------------------------------------------------
    | Approve specify action（隐式模型绑定）
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/actions/{action}/approve
    | Controller:     API\Admin\ActionsController@putApproveAction
    | Method:         PUT
    | Description:    Approve specify action
     */
    Route::put('/actions/{action}/approve', 'API\Admin\ActionsController@putApproveAction');

    /*
    |-------------------------------------------------------------------------------
    | Deny specify action（隐式模型绑定）
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/actions/{action}/deny
    | Controller:     API\Admin\ActionsController@putDenyAction
    | Method:         PUT
    | Description:    Deny specify action
     */
    Route::put('/actions/{action}/deny', 'API\Admin\ActionsController@putDenyAction');

    /*
    |-------------------------------------------------------------------------------
    | Gets All Companies
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/companies
    | Controller:     API\Admin\CompaniesController@getCompanies
    | Method:         GET
    | Description:    Gets all of the companies a user has access to.
     */
    Route::get('/companies', 'API\Admin\CompaniesController@getCompanies');

    /*
    |-------------------------------------------------------------------------------
    | Gets An Individual Company
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/companies/{id}
    | Controller:     API\Admin\CompaniesController@getCompany
    | Method:         GET
    | Description:    Gets an individual company.
     */
    Route::get('/companies/{company}', 'API\Admin\CompaniesController@getCompany')
        ->middleware('can:view,company');

    /*
    |-------------------------------------------------------------------------------
    | Updates An Individual Company
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/companies/{company}
    | Controller:     API\Admin\CompaniesController@putUpdateCompany
    | Method:         PUT
    | Description:    Updates an individual company.
     */
    Route::put('/companies/{company}', 'API\Admin\CompaniesController@putUpdateCompany')
        ->middleware('can:update,company');

    /*
    |-------------------------------------------------------------------------------
    | Gets An Individual Cafe
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/companies/{id}/cafes/{id}
    | Controller:     API\Admin\CafesController@getCafe
    | Method:         GET
    | Description:    Gets an individual cafe
    */
    Route::get('/companies/{company}/cafes/{cafe}', 'API\Admin\CafesController@getCafe')
        ->middleware('can:view,cafe');
    /*
    |-------------------------------------------------------------------------------
    | Updates An Individual Cafe
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/companies/{id}/cafes/{id}
    | Controller:     API\Admin\CafesController@putUpdateCafe
    | Method:         PUT
    | Description:    Submits admin side updates for an individual cafe.
    */
    Route::put('/companies/{company}/cafes/{cafe}', 'API\Admin\CafesController@putUpdateCafe')
        ->middleware('can:update,cafe');
});

// 管理员后台路由
Route::group(['prefix' => 'v1/admin', 'middleware' => ['auth:api', 'admin']], function () {
    /*
    |-------------------------------------------------------------------------------
    | Searches All Users
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/users
    | Controller:     API\Admin\UsersController@getUsers
    | Method:         GET
    | Description:    Gets all users in the application
     */
    Route::get('/users', 'API\Admin\UsersController@getUsers');
    /*
    |-------------------------------------------------------------------------------
    | Gets a User
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/users/{user}
    | Controller:     API\Admin\UsersController@getUser
    | Method:         GET
    | Description:    Gets a specific user
     */
    Route::get('/users/{user}', 'API\Admin\UsersController@getUser');
    /*
    |-------------------------------------------------------------------------------
    | Updates A User
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/users/{user}
    | Controller:     API\Admin\UsersController@putUpdateUser
    | Method:         PUT
    | Description:    Updates an individual user.
     */
    Route::put('/users/{user}', 'API\Admin\UsersController@putUpdateUser')
        ->middleware('can:update,user');
});

// 超级管理后台路由
Route::group(['prefix' => 'v1/admin', 'middleware' => ['auth:api', 'super-admin']], function () {
    /*
    |-------------------------------------------------------------------------------
    | Gets All Brew Methods
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/brew-methods
    | Controller:     API\Admin\BrewMethodsController@getBrewMethods
    | Method:         GET
    | Description:    Gets all brew methods in the application
     */
    Route::get('/brew-methods', 'API\Admin\BrewMethodsController@getBrewMethods');
    /*
    |-------------------------------------------------------------------------------
    | Gets A Brew Method
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/brew-methods/{method}
    | Controller:     API\Admin\BrewMethodsController@getBrewMethod
    | Method:         GET
    | Description:    Gets a specific brew method
     */
    Route::get('/brew-methods/{method}', 'API\Admin\BrewMethodsController@getBrewMethod');
    /*
    |-------------------------------------------------------------------------------
    | Adds A Brew Method
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/brew-methods
    | Controller:     API\Admin\BrewMethodsController@postAddBrewMethod
    | Method:         POST
    | Description:    Adds a brew method
     */
    Route::post('/brew-methods', 'API\Admin\BrewMethodsController@postAddBrewMethod');
    /*
    |-------------------------------------------------------------------------------
    | Updates A Brew Method
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/brew-methods/{method}
    | Controller:     API\Admin\BrewMethodsController@putUpdateBrewMethod
    | Method:         PUT
    | Description:    Updates a brew method
     */
    Route::put('/brew-methods/{method}', 'API\Admin\BrewMethodsController@putUpdateBrewMethod');
    /*
    |-------------------------------------------------------------------------------
    | Gets All Cities
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/cities
    | Controller:     API\Admin\CitiesController@getCities
    | Method:         GET
    | Description:    Gets all cities in the application
     */
    Route::get('/cities', 'API\Admin\CitiesController@getCities');
    /*
    |-------------------------------------------------------------------------------
    | Gets An Individual City
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/cities/{id}
    | Controller:     API\Admin\CitiesController@getCity
    | Method:         GET
    | Description:    Gets an individual city
     */
    Route::get('/cities/{city}', 'API\Admin\CitiesController@getCity');
    /*
    |-------------------------------------------------------------------------------
    | Adds a City
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/cities
    | Controller:     API\Admin\CitiesController@postAddCity
    | Method:         POST
    | Description:    Adds a city
     */
    Route::post('/cities', 'API\Admin\CitiesController@postAddCity');
    /*
    |-------------------------------------------------------------------------------
    | Updates a City
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/cities/{city}
    | Controller:     API\Admin\CitiesController@putUpdateCity
    | Method:         PUT
    | Description:    Updates a city
     */
    Route::put('/cities/{city}', 'API\Admin\CitiesController@putUpdateCity');
    /*
    |-------------------------------------------------------------------------------
    | Deletes a City
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/admin/cities/{city}
    | Controller:     API\Admin\CitiesController@deleteCity
    | Method:         DELETE
    | Description:    Delets a city
     */
    Route::delete('/cities/{city}', 'API\Admin\CitiesController@deleteCity');
});
