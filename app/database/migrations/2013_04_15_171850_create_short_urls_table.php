<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShortUrlsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('short_urls', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('short')->default('');
            $table->string('url')->default('');
            $table->string('ip')->default('127.0.0.1');
            $table->integer('clicks')->default(0);
            $table->integer('secure_clicks')->default(0);
            $table->timestamps();

            $table->index('short');
            $table->index('ip');
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
        Schema::drop('short_urls');
    }

}
