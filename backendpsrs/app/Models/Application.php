<?php

namespace App\Models;
use app\models\Job;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $fillable=[
     "name",
     "email",
     "job_id",
     "resume",
     "resume_score",
     "location_priority",
     "final_score"
    ];
    public function job(){
        return $this->belongsTo(job::class);
    }
}


