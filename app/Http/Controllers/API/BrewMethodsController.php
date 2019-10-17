<?php

namespace App\Http\Controllers\API;

use App\Models\BrewMethod;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BrewMethodsController extends Controller
{
    /**
     * 获取所有冲泡方法以及拥有该冲泡方法的咖啡店数目
     *
     * 请求API: /api/v1/brew-methods
     * 请求方法: GET
     */
    public function getBrewMethods()
    {
        // 获取所有包含咖啡店数目的冲泡方法
        $brewMethods = BrewMethod::withCount('cafes')->get();
        // 以 JSON 格式返回数据
        return response()->json($brewMethods);
    }
}