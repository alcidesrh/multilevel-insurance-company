<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RecruitmentListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        
        return [
            'id' => $this->id,
            'created_at' => $this->created_at,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'phone'=> $this->phone,
            'referrer' => $this->referredBy ? $this->referredBy->name : null,
            'number' => $this->referredBy ? $this->referredBy->number_account : false,
            'second_training_assisted' => $this->second_training_assisted,
            'first_training_assisted' => $this->first_training_assisted,
            'hired' => $this->hired,
            'second_interview_assisted' => $this->second_interview_assisted

        ];
    }
}
