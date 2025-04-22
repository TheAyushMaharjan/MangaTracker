<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MangaDexController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    // routes/web.php

    Route::get('/search/{title}', [MangaDexController::class, 'search']);
    Route::get('/mangadex/manga/{id}', [MangaDexController::class, 'getDetails']);
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
