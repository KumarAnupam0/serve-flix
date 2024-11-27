import React, { useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
    const { movies, loading, error, fetchMovies } = useMovies();

    useEffect(() => {
        fetchMovies();
    }, []);

    if (loading)
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                <p className="ml-4 text-lg text-gray-600">Loading movies...</p>
            </div>
        );

    if (error)
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <p className="text-center text-red-500 text-xl">{error}</p>
            </div>
        );

    return (

        <div className="bg-white min-h-screen">
            <div className="bg-blue-600 py-6 px-4">

                <div className="container mx-auto">
                    <h1 className="font-bold text-white text-3xl text-center mb-3">ServeCenter</h1>
                    <SearchBar/>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Popular Movies
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default HomePage;
