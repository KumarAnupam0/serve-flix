import React from 'react';
import { Star, Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/500x750';

    const handleMovieClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <div
            onClick={handleMovieClick}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
            <div className="relative">
                <img
                    src={posterUrl}
                    alt={movie.title}
                    className="w-full h-96 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full flex items-center">
                    <Star className="mr-1 text-yellow-400" fill="currentColor" size={16} />
                    <span>{movie.vote_average.toFixed(1)}</span>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 truncate">{movie.title}</h3>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">{new Date(movie.release_date).getFullYear()}</span>
                    <Film className="text-blue-500" size={20} />
                </div>
            </div>
        </div>
    );
};

export default MovieCard;