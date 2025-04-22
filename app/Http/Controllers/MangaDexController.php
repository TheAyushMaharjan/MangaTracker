<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class MangaDexController extends Controller
{
    // Search Manga by Title
    public function search($title)
    {
        $query = http_build_query([
            'title' => $title,
            'limit' => 10,
        ]) . '&includes[]=cover_art';

        $response = Http::get("https://api.mangadex.org/manga?$query");

        if (!$response->successful() || !isset($response['data'])) {
            return Inertia::render('SearchResult', [
                'error' => 'Failed to fetch manga data from MangaDex.',
            ]);
        }

        $results = collect($response['data'])->map(function ($manga) {
            $attributes = $manga['attributes'];
            $coverRelationship = collect($manga['relationships'])
                ->firstWhere('type', 'cover_art');

            $coverId = $coverRelationship['attributes']['fileName'] ?? null;

            return [
                'id' => $manga['id'],
                'title' => $attributes['title']['en'] ?? array_values($attributes['title'])[0] ?? 'N/A',
                'description' => $attributes['description']['en'] ?? 'No description',
                'status' => $attributes['status'],
                'genres' => $attributes['tags'],
                'cover_url' => $coverId
                    ? "https://uploads.mangadex.org/covers/:manga-id/:cover-filename"
                    : null,
            ];
        });

        return Inertia::render('SearchResult', [
            'results' => $results,
            'title' => $title,
        ]);
    }



    // Get Manga Detail by ID
    // public function getDetails($id)
    // {
    //     $response = Http::get("https://api.mangadex.org/manga/$id", [
    //         'includes[]' => ['cover_art'],
    //     ]);

    //     $manga = $response['data'];
    //     $attributes = $manga['attributes'];
    //     $coverId = collect($manga['relationships'])
    //         ->firstWhere('type', 'cover_art')['attributes']['fileName'] ?? null;

    //     return response()->json([
    //         'id' => $manga['id'],
    //         'title' => $attributes['title']['en'] ?? array_values($attributes['title'])[0] ?? 'N/A',
    //         'description' => $attributes['description']['en'] ?? 'No description',
    //         'status' => $attributes['status'],
    //         'genres' => $attributes['tags'],
    //         'cover_url' => $coverId
    //             ? "https://uploads.mangadex.org/covers/{$manga['id']}/$coverId.256.jpg"
    //             : null,
    //     ]);
    // }
}
