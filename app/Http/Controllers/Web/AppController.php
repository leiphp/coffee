<?php
/**
 * Create by PhpStorm
 * User: 雷小天
 * Site: www.100txy.com
 * Date: 2019/10/13 0013
 * Time: 23:44
 */
namespace app\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Auth;

class AppController extends Controller
{
    public function getApp()
    {
        return view('app');
    }

    public function getLogout()
    {
        Auth::logout();
        return redirect('/');
    }
}
