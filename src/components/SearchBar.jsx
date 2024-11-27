import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useMovies } from '../context/MovieContext';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { fetchMovies } = useMovies();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            fetchMovies(searchTerm);
        }
    };

    return (
        <div className="mb-8 max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="flex">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-grow px-4 py-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black font-normal"
                />
                <button
                    type="submit"
                    className="transition-button px-4 py-3 text-white border-none rounded-r-full transition duration-300"
                >
                    <Search />
                </button>
            </form>

            <style jsx>{`
                .transition-button {
                    background-color: black;
                    color: white;
                    position: relative;
                    overflow: hidden;
                }

                .transition-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 200%;
                    height: 100%;
                    background: linear-gradient(
                            90deg,
                            #ff6ec4,
                            #7873f5,
                            #57e8ff,
                            #ff6ec4
                    );
                    background-size: 400%;
                    transition: all 0.5s ease;
                    z-index: 0;
                }

                .transition-button:hover::before {
                    left: 0;
                    animation: gradientMove 3s infinite;
                }

                .transition-button:hover {
                    color: white;
                }

                .transition-button > * {
                    position: relative;
                    z-index: 1;
                }

                @keyframes gradientMove {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
        </div>
    );
};

export default SearchBar;
