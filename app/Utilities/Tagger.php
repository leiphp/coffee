<?php
/**
 * Create by PhpStorm
 * User 雷小天
 * Site www.100txy.com
 * Date 2019/10/17
 * Time 19:23
 */

namespace App\Utilities;

use App\Models\Tag;

class Tagger
{
    public static function tagCafe($cafe, $tags, $userId)
    {
        // 遍历标签数据，分别存储每个标签，并建立其余咖啡店的关联
        foreach ($tags as $tag) {
            $name = trim($tag);
            // 如果标签已经存在则直接获取其实例
            $newCafeTag = Tag::firstOrNew(array('name' => $name));
            $newCafeTag->name = $name;
            $newCafeTag->save();
            // 将标签和咖啡店关联起来
            $cafe->tags()->syncWithoutDetaching([$newCafeTag->id => ['user_id' => $userId]]);
        }
    }
    /**
     * 给咖啡店添加标签
     * @param $request
     * @param $cafeID
     * @return JsonResponse
     */
    public function postAddTags(Request $request, $cafeID)
    {
        // 从请求中获取标签信息
        $tags = $request->input('tags');
        $cafe = Cafe::find($cafeID);

        // 处理新增标签并建立标签与咖啡店之间的关联
        Tagger::tagCafe($cafe, $tags, Auth::user()->id);

        // 返回标签
        $cafe = Cafe::where('id', '=', $cafeID)
            ->with('brewMethods')
            ->with('userLike')
            ->with('tags')
            ->first();

        return response()->json($cafe, 201);
    }
    public function deleteCafeTag($cafeID, $tagID)
    {
        DB::table('cafes_users_tags')->where('cafe_id', $cafeID)->where('tag_id', $tagID)->where('user_id', Auth::user()->id)->delete();
        return response(null, 204);
    }
}