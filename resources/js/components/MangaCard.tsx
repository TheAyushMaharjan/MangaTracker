
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface MangaCardProps {
  id: string;
  title: string;
  coverImage: string;
  status?: 'reading' | 'completed' | 'plan-to-read' | 'dropped' | null;
  rating?: number;
  onClick?: () => void;
  className?: string;
}

const MangaCard: React.FC<MangaCardProps> = ({
  id,
  title,
  coverImage,
  status = null,
  rating,
  onClick,
  className,
}) => {
  const getStatusBadge = () => {
    if (!status) return null;
    
    const statusText = {
      'reading': 'Reading',
      'completed': 'Completed',
      'plan-to-read': 'Plan to Read',
      'dropped': 'Dropped'
    };
    
    const statusClass = {
      'reading': 'status-reading',
      'completed': 'status-completed',
      'plan-to-read': 'status-plan-to-read',
      'dropped': 'status-dropped'
    };
    
    return (
      <Badge className={cn("absolute top-2 right-2", statusClass[status])}>
        {statusText[status]}
      </Badge>
    );
  };

  const renderStars = () => {
    if (!rating) return null;
    
    return (
      <div className="flex items-center mt-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "text-yellow-400" : "text-gray-300"
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div 
      className={cn("manga-card group cursor-pointer", className)}
      onClick={onClick}
    >
      <div className="relative h-80 w-56">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover rounded-lg"
        />
        {getStatusBadge()}
        <div className="manga-card-overlay">
          <h3 className="text-white font-medium text-lg line-clamp-2">{title}</h3>
          {renderStars()}
          <div className="flex justify-between items-center mt-2">
            <span className="text-white text-sm opacity-75">ID: {id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangaCard;
