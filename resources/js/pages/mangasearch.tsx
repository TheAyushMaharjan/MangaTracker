import axios from 'axios';
import { Search } from 'lucide-react';
import { useState } from 'react';

const MangaSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        const title = e.target.value;
        setQuery(title);

        if (title.length >= 2) {
            const res = await axios.get(`/mangadex/search/${encodeURIComponent(title)}`);
            setResults(res.data);
        }
    };

    return (
        <div className="relative w-64">
            <Search className="text-muted-foreground absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 transform" />
            <input
                type="text"
                placeholder="Search manga..."
                value={query}
                onChange={handleSearch}
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring h-9 w-full rounded-md border pl-8 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
            {results.length > 0 && (
                <ul className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white text-sm shadow-md">
                    {results.map((manga) => (
                        <li key={manga.id} className="p-2 hover:bg-gray-100">
                            {manga.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MangaSearch;
