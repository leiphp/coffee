<?php
/**
 * Create by PhpStorm
 * User 雷小天
 * Site www.100txy.com
 * Date 2019/10/17
 * Time 9:51
 */

namespace App\Utilities;

use App\Models\City;
use GuzzleHttp\Client;

class GaodeMaps
{
    /**
     * 通过真实地址获取对应的经纬度
     * @param $address
     * @param $city
     * @param $state
     * @param $zip
     * @return mixed
     */
    public static function geocodeAddress($address, $city, $state)
    {
        // 省、市、区、详细地址
        $address = urlencode($state . $city . $address);
        // Web 服务 API Key
        $apiKey = config('services.gaode.ws_api_key');
        // 构建地理编码 API 请求 URL，默认返回 JSON 格式响应
        $url = 'https://restapi.amap.com/v3/geocode/geo?address=' . $address . '&key=' . $apiKey;

        // 创建 Guzzle HTTP 客户端发起请求
        $client = new Client();

        // 发送请求并获取响应数据
        $geocodeResponse = $client->get($url)->getBody();
        $geocodeData = json_decode($geocodeResponse);

        // 初始化地理编码位置
        $coordinates['lat'] = null;
        $coordinates['lng'] = null;

        // 如果响应数据不为空则解析出经纬度
        if (!empty($geocodeData)
            && $geocodeData->status  // 0 表示失败，1 表示成功
            && isset($geocodeData->geocodes)
            && isset($geocodeData->geocodes[0])) {
            list($latitude, $longitude) = explode(',', $geocodeData->geocodes[0]->location);
            $coordinates['lat'] = $latitude;  // 经度
            $coordinates['lng'] = $longitude; // 纬度
        }

        // 返回地理编码位置数据
        return $coordinates;
    }
    /**
     * 通过经纬度反查距离最近的城市
     * @param $name
     * @param $latitude
     * @param $longitude
     * @return int|null
     */
    public static function findClosestCity($name, $latitude, $longitude)
    {
        $cities = City::where('name', 'LIKE', $name . '%')->get();

        // 检查距离信息
        if ($cities && count($cities) == 1) {
            return $cities[0]->id;
        } else {
            // 我们可以对地址进行地理编码获取经纬度
            // 反过来通过对经纬度进行逆地理编码也可以获取地址信息
            $apiKey = config('services.gaode.ws_api_key'); // WebService API Key
            $location = $latitude . ',' . $longitude;
            $url = 'https://restapi.amap.com/v3/geocode/regeo?location=' . $location . '&key=' . $apiKey;
            // 创建 Guzzle HTTP 客户端发起请求
            $client = new Client();

            // 发送请求并获取响应数据
            $regeocodeResponse = $client->get($url)->getBody();
            $regeocodeData = json_decode($regeocodeResponse);
            if (empty($regeocodeData) || $regeocodeData->status == 0) {
                return null;
            }

            if ($cities) {
                foreach ($cities as $city) {
                    if ($city->name == $regeocodeData->regeocode->addressComponent->city) {
                        return $city->id;
                    }
                }
            }

            $city = new City();
            // 直辖市city字段为空数组
            if (!$regeocodeData->regeocode->addressComponent->city) {
                $city->name = $regeocodeData->regeocode->addressComponent->province;
            } else {
                $city->name = $regeocodeData->regeocode->addressComponent->city;
            }
            $city->slug = $city->name;
            $city->state = $regeocodeData->regeocode->addressComponent->province;
            $city->country = $regeocodeData->regeocode->addressComponent->country;
            $city->save();

            return $city->id;
        }
    }
}