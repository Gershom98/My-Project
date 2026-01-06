<?php

namespace App\Models;
use app\models\Application;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
 // ✅ IMPORT THE MODEL

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'department',
        'location',
        'salary',
    ];

    /**
     * One Job has many Applications
     */
    
}
