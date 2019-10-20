<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCafeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'company_name' => 'required_without:company_id',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'zip' => 'required',
            'website' => 'sometimes|url',
            'tea' => 'boolean',
            'matcha' => 'boolean'
        ];
    }

    public function messages()
    {
        return [
            'company_name.required_without' => '咖啡店所属公司不能为空',
            'address.required' => '咖啡店地址不能为空',
            'city.required' => '咖啡店所在城市不能为空',
            'state.required' => '咖啡店所在省份不能为空',
            'zip.required' => '咖啡店邮编不能为空',
            'zip.regex' => '无效的邮政编码',
            'website.url' => '无效的咖啡店网址',
        ];
    }
}
