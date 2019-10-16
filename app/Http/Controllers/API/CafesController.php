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
use App\Http\Requests\StoreCafeRequest;

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

    public function postNewCafe(StoreCafeRequest $request){
        $cafe = new Cafe();

        $cafe->name     = $request->input('name');
        $cafe->address  = $request->input('address');
        $cafe->city     = $request->input('city');
        $cafe->state    = $request->input('state');
        $cafe->zip      = $request->input('zip');
        $cafe->latitude = 0;
        $cafe->longitude= 0;
        $cafe->save();

        return response()->json($cafe, 201);
    }


}