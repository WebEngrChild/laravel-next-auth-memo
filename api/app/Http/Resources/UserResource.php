<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // ここから削除する
        // return [parent::toArray($request)];
        // ここまで削除
        // ここから追記
        return [
            'id' => $this->id
        ];
        // ここまで追記
    }
}
