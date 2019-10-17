<?php
/**
 * Create by PhpStorm
 * User 雷小天
 * Site www.100txy.com
 * Date 2019/10/17
 * Time 9:51
 */

namespace App\Utilities;
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
}