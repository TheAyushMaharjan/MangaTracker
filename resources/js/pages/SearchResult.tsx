import { Head } from '@inertiajs/react';
interface Manga {
    id: string;
    title: string;
    description?: string;
    cover_url?: string;
}

// Then use it in your props
interface SearchResultProps {
    title?: string;
    results?: Manga[];
    error?: string;
}
export default function SearchResult({ title = '', results = [], error = '' }: SearchResultProps) {
    return (
        <>
            <Head title={`Search results for "${title}"`} />

            <div className="p-4">
                <h1 className="mb-4 text-2xl font-bold">Search results for "{title}"</h1>

                {error && <p className="text-red-500">{error}</p>}

                {results.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {results.map((manga: Manga) => (
                            <div key={manga.id} className="rounded border p-2 shadow transition hover:shadow-md">
                                {manga.cover_url ? (
                                    <img
                                        src={manga.cover_url}
                                        alt={manga.title}
                                        className="h-48 w-full rounded object-cover"
                                        onError={(e) => (e.currentTarget.src = '/default-cover.jpg')} // optional fallback
                                    />
                                ) : (
                                    <div className="flex h-48 w-full items-center justify-center rounded bg-gray-200 text-sm text-gray-500">
                                        No Image
                                    </div>
                                )}
                                <h2 className="mt-2 truncate font-semibold">{manga.title}</h2>
                                <p className="line-clamp-3 text-sm text-gray-600">{manga.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    !error && <p>No results found.</p>
                )}
            </div>
        </>
    );
}
