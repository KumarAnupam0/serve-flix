import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
    const TMDB_API_KEY = '0cd621d7a9306d1cc233c041901161a6';

    const fetchMovies = async (query = '') => {
        setLoading(true);
        setError(null);

        try {
            const endpoint = query
                ? `/search/movie?query=${query}`
                : '/movie/popular';

            const response = await axios.get(`${TMDB_BASE_URL}${endpoint}`, {
                params: {
                    api_key: TMDB_API_KEY,
                    language: 'en-US',
                    page: 1
                }
            });

            setMovies(response.data.results);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const getMovieDetails = async (movieId) => {
        try {
            const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}`, {
                params: {
                    api_key: TMDB_API_KEY,
                    language: 'en-US',
                    append_to_response: 'credits,videos'
                }
            });
            return response.data;
        } catch (err) {
            setError(err.message);
            return null;
        }
    };

    return (
        <MovieContext.Provider value={{
            movies,
            loading,
            error,
            fetchMovies,
            getMovieDetails
        }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovies = () => useContext(MovieContext);