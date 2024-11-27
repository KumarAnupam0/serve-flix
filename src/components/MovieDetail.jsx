import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { useMovies } from '../context/MovieContext';

const MovieDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const { getMovieDetails, loading, error } = useMovies();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const details = await getMovieDetails(id);
            setMovie(details);
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500"></div>
        </div>
    );

    if (error) return (
        <div className="text-center text-red-500 mt-10">{error}</div>
    );

    if (!movie) return null;

    return (
        <div className="container mx-auto px-4 py-8">
            <button
                onClick={() => navigate('/')}
                className="mb-4 flex items-center bg-white text-black border border-black-300 rounded-full px-4 py-2 hover:bg-black hover:text-white transition duration-300"
            >
                <ArrowLeft className="mr-2" /> Back to Movies
            </button>

            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:w-1/3">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="md:w-2/3 p-6 text-black">
                    <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>

                    <div className="flex items-center mb-4 space-x-4">
                        <div className="flex items-center bg-white rounded drop-shadow p-3">
                            <Star className="text-yellow-400 mr-2" fill="currentColor" />
                            <span>{movie.vote_average.toFixed(1)}/10</span>
                        </div>
                        <div className="flex items-center bg-white rounded drop-shadow p-3">
                            <Calendar className="mr-2 text-blue-500" />
                            <span>{new Date(movie.release_date).getFullYear()}</span>
                        </div>
                        <div className="flex items-center bg-white rounded drop-shadow p-3 mb-20``">
                            <Clock className="mr-2 text-green-500" />
                            <span>{movie.runtime} min</span>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mt-4">Overview</h2>
                    <p className="text-gray-600 mb-4 bg-white drop-shadow-lg rounded-3xl p-10">{movie.overview}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold">Genres</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {movie.genres.map(genre => (
                                    <span
                                        key={genre.id}
                                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                                    >
                    {genre.name}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;