<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\City;

class CitiesController extends Controller
{
    public function getCities()
    {
        $cities = City::all();
        return response()->json($cities);
    }

    public function getCity($slug)
    {
        $city = City::where('slug', '=', $slug)
            ->with(['cafes' => function ($query) {
                $query->with('company');
            }])
            ->first();
        if ($city != null) {
            return response()->json($city);
        } else {
            return response()->json(null, 404);
        }
    }
}
