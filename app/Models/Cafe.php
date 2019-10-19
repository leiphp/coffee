<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cafe extends Model
{
    public function brewMethods()
    {
        return $this->belongsToMany(BrewMethod::class, 'cafes_brew_methods', 'cafe_id', 'brew_method_id');
    }
    // 关联分店
    public function children()
    {
        return $this->hasMany(Cafe::class, 'parent', 'id');
    }

// 归属总店
    public function parent()
    {
        return $this->hasOne(Cafe::class, 'id', 'parent');
    }
    // 与 User 间的多对对关联
    public function likes()
    {
        return $this->belongsToMany(User::class, 'users_cafes_likes', 'cafe_id', 'user_id');
    }

    public function userLike()
    {
        return $this->belongsToMany(User::class, 'users_cafes_likes', 'cafe_id', 'user_id')->where('user_id', auth()->id());
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'cafes_users_tags', 'cafe_id', 'tag_id');
    }
    // 咖啡店图片
    public function photos()
    {
        return $this->hasMany(CafePhoto::class, 'id', 'cafe_id');
    }
}
