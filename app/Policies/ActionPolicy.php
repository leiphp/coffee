<?php

namespace App\Policies;

use App\Models\Action;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ActionPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * 如果用户是管理员或超级管理员的话则具备该权限
     * 否则只有审核归属于自己公司名下的咖啡店动作的权限
     *
     * @param \App\User $user
     * @param \App\Models\Action $action
     * @return bool
     */
    public function approve(User $user, Action $action)
    {
        if ($user->permission == User::ROLE_ADMIN || $user->permission == User::ROLE_SUPER_ADMIN) {
            return true;
        } else if ($user->companiesOwned->contains($action->company_id)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 如果用户是管理员或超级管理员的话则具备该权限
     * 否则只有审核归属于自己公司名下的咖啡店动作的权限
     *
     * @param \App\User $user
     * @param \App\Models\Action $action
     * @return bool
     */
    public function deny(User $user, Action $action)
    {
        if ($user->permission == User::ROLE_ADMIN || $user->permission == User::ROLE_SUPER_ADMIN) {
            return true;
        } else if ($user->companiesOwned->contains($action->company_id)) {
            return true;
        } else {
            return false;
        }
    }
}