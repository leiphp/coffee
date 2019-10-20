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
use App\Models\Company;
use App\Http\Requests\StoreCafeRequest;
use App\Utilities\GaodeMaps;
use Auth;
use Carbon\Carbon;
use App\Utilities\Tagger;
use App\Services\CafeService;

class CafesController extends Controller
{

    public function getCafes()
    {
        $cafes = Cafe::with('brewMethods')
            ->with(['tags' => function ($query) {
                $query->select('tag');
            }])
            ->with('company')
            ->withCount('userLike')
            ->withCount('likes')
            ->get();

        return response()->json($cafes);
    }

    public function getCafe($id)
    {
        $cafe = Cafe::where('id', '=', $id)
            ->with('brewMethods')
            ->withCount('userLike')
            ->with('tags')
            ->with(['company' => function ($query) {
                $query->withCount('cafes');
            }])
            ->withCount('likes')
            ->first();

        return response()->json($cafe);
    }

    public function postNewCafe(StoreCafeRequest $request)
    {
        $cafeService = new CafeService();
        $cafe = $cafeService->addCafe($request->all(), Auth::user()->id);

        $company = Company::where('id', '=', $cafe->company_id)
            ->with('cafes')
            ->first();

        return response()->json($company, 201);
    }

    public function postLikeCafe($cafeID)
    {
        $cafe = Cafe::where('id', '=', $cafeID)->first();
        $cafe->likes()->attach(Auth::user()->id, [
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        return response()->json(['cafe_liked' => true], 201);
    }

    public function deleteLikeCafe($cafeID)
    {
        $cafe = Cafe::where('id', '=', $cafeID)->first();

        $cafe->likes()->detach(Auth::user()->id);

        return response(null, 204);
    }

    /**
     * 给咖啡店添加标签
     * @param $request
     * @param $cafeID
     * @return JsonResponse
     */
    public function postAddTags(Request $request, $cafeID)
    {

    }

    /**
     * 删除咖啡店上的指定标签
     * @param $cafeID
     * @param $tagID
     * @return Response
     */
    public function deleteCafeTag($cafeID, $tagID)
    {

    }
    // 获取咖啡店编辑表单数据
    public function getCafeEditData($id)
    {
        $cafe = Cafe::where('id', '=', $id)
            ->with('brewMethods')
            ->withCount('userLike')
            ->with(['company' => function ($query) {
                $query->withCount('cafes');
            }])
            ->first();
        return response()->json($cafe);
    }

    // 更新咖啡店数据
    public function putEditCafe($id, EditCafeRequest $request)
    {
        $cafe = Cafe::where('id', '=', $id)->with('brewMethods')->first();

        $cafeService = new CafeService();
        $updatedCafe = $cafeService->editCafe($cafe->id, $request->all(), Auth::user()->id);

        $company = Company::where('id', '=', $updatedCafe->company_id)
            ->with('cafes')
            ->first();

        return response()->json($company, 200);
    }

    // 删除咖啡店
    public function deleteCafe($id)
    {
        $cafe = Cafe::where('id', '=', $id)->first();
        $cafe->delete();
        return response()->json(['message' => '删除成功'], 204);
    }

}