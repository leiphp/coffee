<?php
/**
 * Create by PhpStorm
 * User: 雷小天
 * Site: www.100txy.com
 * Date: 2019/10/15 0015
 * Time: 23:54
 */
namespace app\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Request;
use App\Models\Cafe;

class CafesController extends Controller
{

    public function getCafes(){
        $cafes = Cafe::all();
        return response()->json($cafes);
    }

    public function getCafe($id){
        $cafe = Cafe::where('id', '=', $id)->first();
        return response()->json($cafe);
    }

    public function postNewCafe(){
        $cafe = new Cafe();

        $cafe->name     = Request::get('name');
        $cafe->address  = Request::get('address');
        $cafe->city     = Request::get('city');
        $cafe->state    = Request::get('state');
        $cafe->zip      = Request::get('zip');

        $cafe->save();

        return response()->json($cafe, 201);
    }


}