import MangaCard from '@/components/MangaCard';
import { cn } from '@/lib/utils';
import React from 'react';

// Sample manga data for demonstration
const SAMPLE_MANGA = [
    {
        id: '1',
        title: 'One Piece',
        coverImage: 'https://images.unsplash.com/photo-1630710478635-382f8ced3b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        status: 'reading' as const,
        rating: 5,
    },
    {
        id: '2',
        title: 'Chainsaw Man',
        coverImage: 'https://images.unsplash.com/photo-1678831494263-1bafe4b3c2e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        status: 'completed' as const,
        rating: 4,
    },
    {
        id: '3',
        title: 'Jujutsu Kaisen',
        coverImage: 'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        status: 'plan-to-read' as const,
        rating: 0,
    },
    {
        id: '4',
        title: 'Demon Slayer',
        coverImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        status: null,
        rating: 0,
    },
    {
        id: '5',
        title: 'Attack on Titan',
        coverImage: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        status: 'completed' as const,
        rating: 5,
    },
    {
        id: '6',
        title: 'Berserk',
        coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        status: 'dropped' as const,
        rating: 3,
    },
];

interface MangaGridProps {
    title?: string;
    manga?: typeof SAMPLE_MANGA;
    className?: string;
}

const MangaGrid: React.FC<MangaGridProps> = ({ title, manga = SAMPLE_MANGA, className }) => {
    return (
        <div className={cn('w-full', className)}>
            {title && <h2 className="mb-6 text-2xl font-bold">{title}</h2>}
            <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {manga.map((item) => (
                    <MangaCard key={item.id} id={item.id} title={item.title} coverImage={item.coverImage} status={item.status} rating={item.rating} />
                ))}
            </div>
        </div>
    );
};

export default MangaGrid;
