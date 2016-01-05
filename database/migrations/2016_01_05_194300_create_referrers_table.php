<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReferrersTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('referrers', function(Blueprint $table)
        {
            $table->increments('id');
            $table->integer('short_url_id');
            $table->string('url');
            $table->integer('clicks')->default(0);
            $table->integer('secure_clicks')->default(0);
            $table->timestamps();

            $table->index('short_url_id');
            $table->index('url');
            $table->index('created_at');
            $table->index('updated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('referrers');
    }

}