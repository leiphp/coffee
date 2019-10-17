<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedUsersCafesLikes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_cafes_likes', function (Blueprint $table) {
            $table->integer('user_id')->unsigned();
            $table->integer('cafe_id')->unsigned();
            $table->primary(['user_id', 'cafe_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_cafes_likes');
    }
}
