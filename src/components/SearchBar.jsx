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
                    className="flex-grow px-4 py-3 border border-white-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-black-500 bg-white text-black font-normal"
                />
                <button
                    type="submit"
                    //Check
                    className="bg-white px-6 py-3 rounded-r-full text-black"
                >
                    <Search className="mr-2" />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;